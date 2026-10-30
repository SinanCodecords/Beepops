import { Suspense } from "react";
import { redirect } from "next/navigation";
import { formatPrice, getCustomer, type CustomerOrder } from "@/lib/shopify";
import { Section, SectionHeading } from "@/components/shared/section";
import { ArrowButton } from "@/components/shared/arrow-button";
import { Button } from "@/components/ui/button";

export function AccountPage() {
  return (
    <Section className="min-h-[60vh]">
      <Suspense fallback={<p className="text-sm text-stone">Loading your account…</p>}>
        <AccountDetails />
      </Suspense>
    </Section>
  );
}

async function AccountDetails() {
  const customer = await getCustomer();
  if (!customer) redirect("/account/login");

  const name = [customer.firstName, customer.lastName].filter(Boolean).join(" ");
  const orders = customer.orders.nodes;

  return (
    <div className="grid gap-10 lg:grid-cols-[280px_1fr]">
      <aside className="h-fit rounded-3xl bg-sand p-6">
        <SectionHeading eyebrow="My account" title={name || "Welcome"} titleClassName="text-2xl md:text-3xl" />
        <p className="mt-2 text-sm break-all text-stone">{customer.emailAddress?.emailAddress}</p>
        <form action="/account/logout" method="post" className="mt-6">
          <Button type="submit" variant="outline" className="w-full">
            Log out
          </Button>
        </form>
      </aside>

      <div>
        <h2 className="text-2xl text-forest">Your orders</h2>
        {orders.length === 0 ? (
          <div className="mt-6 rounded-3xl border border-border p-8 text-center">
            <p className="text-sm text-stone">You haven&apos;t placed any orders yet.</p>
            <ArrowButton href="/shop" className="mt-4">
              Start shopping
            </ArrowButton>
          </div>
        ) : (
          <ul className="mt-6 space-y-4">
            {orders.map((order) => (
              <OrderRow key={order.id} order={order} />
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

function OrderRow({ order }: { order: CustomerOrder }) {
  const date = new Date(order.processedAt).toLocaleDateString("en-IN", { dateStyle: "medium" });
  const items = order.lineItems.nodes.map((item) => `${item.quantity} × ${item.title}`).join(", ");

  return (
    <li className="flex flex-col gap-3 rounded-3xl border border-border p-5 sm:flex-row sm:items-center">
      <div className="min-w-0 flex-1">
        <p className="font-semibold text-ink">
          Order {order.name} <span className="font-normal text-stone">· {date}</span>
        </p>
        <p className="mt-1 truncate text-sm text-stone">{items}</p>
      </div>
      {order.financialStatus && (
        <span className="w-fit rounded-full bg-muted px-3 py-1 text-xs capitalize">
          {order.financialStatus.toLowerCase().replace("_", " ")}
        </span>
      )}
      <p className="font-semibold text-forest">{formatPrice(order.totalPrice)}</p>
      <a href={order.statusPageUrl} className="text-sm font-medium text-amber hover:underline">
        View order
      </a>
    </li>
  );
}
