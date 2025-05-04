-- CreateTable
CREATE TABLE "User" (
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Court" (
    "id" SERIAL NOT NULL
);

-- CreateTable
CREATE TABLE "Reservation" (
    "id" SERIAL NOT NULL,
    "courtId" INTEGER NOT NULL,
    "username" TEXT NOT NULL,
    "date" TEXT NOT NULL,
    "block" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");

-- CreateIndex
CREATE UNIQUE INDEX "Court_id_key" ON "Court"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Reservation_id_key" ON "Reservation"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Reservation_courtId_key" ON "Reservation"("courtId");

-- CreateIndex
CREATE UNIQUE INDEX "Reservation_username_key" ON "Reservation"("username");

-- CreateIndex
CREATE UNIQUE INDEX "Reservation_date_block_key" ON "Reservation"("date", "block");

-- AddForeignKey
ALTER TABLE "Reservation" ADD CONSTRAINT "Reservation_courtId_fkey" FOREIGN KEY ("courtId") REFERENCES "Court"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Reservation" ADD CONSTRAINT "Reservation_username_fkey" FOREIGN KEY ("username") REFERENCES "User"("username") ON DELETE RESTRICT ON UPDATE CASCADE;
