/*
  Warnings:

  - Made the column `score` on table `Gallery` required. The migration will fail if there are existing NULL values in that column.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Gallery" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "id_image" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "autor" TEXT NOT NULL,
    "description" TEXT,
    "tag" TEXT,
    "great" INTEGER NOT NULL,
    "like" INTEGER NOT NULL,
    "score" INTEGER NOT NULL,
    "CreatedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "UpdatedAt" DATETIME NOT NULL
);
INSERT INTO "new_Gallery" ("id", "id_image", "title", "autor", "description", "tag", "great", "like", "CreatedAt", "UpdatedAt", "score") SELECT "id", "id_image", "title", "autor", "description", "tag", "great", "like", "CreatedAt", "UpdatedAt", "score" FROM "Gallery";
DROP TABLE "Gallery";
ALTER TABLE "new_Gallery" RENAME TO "Gallery";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
