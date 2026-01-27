import { Pool } from 'pg';
import { PrismaPg } from '@prisma/adapter-pg';
// Direct import from the generated client to ensure Next.js compiles it
import { PrismaClient } from './generated/prisma/client';

const connectionString = process.env.DATABASE_URL;

const pool = new Pool({ connectionString });
const adapter = new PrismaPg(pool);

const globalForPrisma = global as unknown as { prisma: PrismaClient };

export const prisma =
  globalForPrisma.prisma ||
  new PrismaClient({
    adapter,
  });

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;

export default prisma;
