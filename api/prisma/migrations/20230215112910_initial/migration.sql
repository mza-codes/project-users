-- CreateTable
CREATE TABLE "User" (
    "sid" TEXT NOT NULL,
    "fullname" TEXT NOT NULL,
    "name" JSONB NOT NULL,
    "location" JSONB NOT NULL,
    "email" TEXT NOT NULL,
    "login" JSONB NOT NULL,
    "dob" JSONB NOT NULL,
    "registered" JSONB NOT NULL,
    "phone" TEXT NOT NULL,
    "cell" TEXT NOT NULL,
    "id" JSONB NOT NULL,
    "picture" JSONB NOT NULL,
    "nat" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("sid")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
