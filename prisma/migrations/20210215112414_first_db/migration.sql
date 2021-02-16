-- CreateTable
CREATE TABLE "Post" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "id_image" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "autor" TEXT NOT NULL,
    "description" TEXT,
    "tag" TEXT,
    "great" INTEGER NOT NULL,
    "like" INTEGER NOT NULL,
    "CreatedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "UpdatedAt" DATETIME NOT NULL
);
