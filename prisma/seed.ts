import prisma from '../lib/prisma';
import products from './products.json';

async function main() {
  console.log('Seeding database...');
  
  // Optional: Clean up existing data to prevent duplicates
  // await prisma.product.deleteMany(); 
  // console.log('Deleted existing products.');

  for (const product of products) {
    await prisma.product.create({
      data: product,
    });
  }

  console.log('Seeding finished.');
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
