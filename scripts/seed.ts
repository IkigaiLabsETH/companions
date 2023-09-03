const { PrismaClient } = require('@prisma/client');

const db = new PrismaClient();

async function main() {
  try {
    await db.category.createMany({
      data: [
        { name: 'Creator' },
        { name: 'Curator' },
        { name: 'Collector' },
        { name: 'Web3' },
        { name: 'NFT' },
        { name: 'Founder' },
        { name: 'Investor' },
      ],
    });
  } catch (error) {
    console.error('Error seeding default categories:', error);
  } finally {
    await db.$disconnect();
  }
}

main();
