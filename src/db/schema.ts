import { integer, pgTable, serial, text, timestamp,pgEnum} from "drizzle-orm/pg-core";

export const statusEnum = pgEnum('mood', ['open', 'paid', 'void', 'uncollectible']);


export const Invoices = pgTable("invoices", {
  id: serial("id").primaryKey().notNull(),
  createTs:timestamp("createTs").defaultNow().notNull(),
  value: integer("value").notNull(),
  description: text("description").notNull(),
  status: statusEnum("status").notNull(),
});