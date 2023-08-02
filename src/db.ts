import { PrismaClient } from "@prisma/client";

class PrismaSingleton {
  private static instance: PrismaClient | null = null;

  static getInstance(): PrismaClient {
    if (!PrismaSingleton.instance) {
      PrismaSingleton.instance = new PrismaClient({
        log: ["query"],
      });
    }
    return PrismaSingleton.instance;
  }
}

export const prisma = PrismaSingleton.getInstance();
