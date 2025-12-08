import * as SQlite from 'expo-sqlite';

export async function getDb() {
  const db = await SQlite.openDatabaseAsync('ShopList.db');
  await db.execAsync(`
    PRAGMA journal_mode='wal';
    CREATE TABLE IF NOT EXISTS ShopList(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL
    );
    `);
    return db;
}