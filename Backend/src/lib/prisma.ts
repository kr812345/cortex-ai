import { prismaPg } from '@prisma/adapter-pg';
import { prismaClient } from '../generated/prisma/client';
import 'dotenv/config';

const adapter = new prismaPg({
    connectionString: `${process.env.DATABASE_URL}`,
});

export const prisma = new prismaClient({ adapter });