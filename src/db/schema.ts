import {
  pgTable,
  uniqueIndex,
  text,
  timestamp,
  boolean,
  index,
  smallserial,
} from 'drizzle-orm/pg-core';
import { sql } from 'drizzle-orm';

export const analysis = pgTable(
  'Analysis',
  {
    id: smallserial().primaryKey().notNull(),
    createdAt: timestamp({ precision: 3, mode: 'string' })
      .default(sql`CURRENT_TIMESTAMP`)
      .notNull(),
    updatedAt: timestamp({ precision: 3, mode: 'string' }).notNull(),
    entryId: text().notNull(),
    mood: text().notNull(),
    summary: text().notNull(),
    color: text().notNull(),
    negative: boolean().notNull(),
  },
  (table) => [
    uniqueIndex('Analysis_entryId_key').using(
      'btree',
      table.entryId.asc().nullsLast().op('text_ops')
    ),
  ]
);

export const user = pgTable(
  'User',
  {
    id: smallserial().primaryKey().notNull(),
    clerkId: text().notNull(),
    createdAt: timestamp({ precision: 3, mode: 'string' })
      .default(sql`CURRENT_TIMESTAMP`)
      .notNull(),
    email: text().notNull(),
    updatedAt: timestamp({ precision: 3, mode: 'string' }).notNull(),
  },
  (table) => [
    uniqueIndex('User_clerkId_key').using(
      'btree',
      table.clerkId.asc().nullsLast().op('text_ops')
    ),
    uniqueIndex('User_email_key').using(
      'btree',
      table.email.asc().nullsLast().op('text_ops')
    ),
  ]
);

export const journalEntry = pgTable(
  'JournalEntry',
  {
    id: smallserial().primaryKey().notNull(),
    createdAt: timestamp({ precision: 3, mode: 'string' })
      .default(sql`CURRENT_TIMESTAMP`)
      .notNull(),
    updatedAt: timestamp({ precision: 3, mode: 'string' }).notNull(),
    userId: text().notNull(),
    content: text().notNull(),
  },
  (table) => [
    index('JournalEntry_userId_idx').using(
      'btree',
      table.userId.asc().nullsLast().op('text_ops')
    ),
  ]
);
