/*
  Warnings:

  - You are about to drop the column `block` on the `Reservation` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[date]` on the table `Reservation` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "Reservation_date_block_key";

-- AlterTable
ALTER TABLE "Reservation" DROP COLUMN "block",
ALTER COLUMN "active" SET DEFAULT true;

-- CreateIndex
CREATE UNIQUE INDEX "Reservation_date_key" ON "Reservation"("date");
