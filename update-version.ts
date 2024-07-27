import { promises as fs } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Путь к файлу package.json
const packageJsonPath = path.resolve(__dirname, 'package.json');

// Чтение файла package.json
const packageJson = JSON.parse(await fs.readFile(packageJsonPath, 'utf8'));

// Обновление версии
const versionParts: number[] = packageJson.version.split('.').map(Number);
versionParts[2] += 1; // Увеличиваем третий компонент версии
if (versionParts[2] >= 10) {
    versionParts[2] = 0;
    versionParts[1] += 1;
}
if (versionParts[1] >= 10) {
    versionParts[1] = 0;
    versionParts[0] += 1;
}
packageJson.version = versionParts.join('.');

// Запись обновленного package.json обратно
await fs.writeFile(packageJsonPath, JSON.stringify(packageJson, null, 2));

// Обновление версии в .env файле
const envPath = path.resolve(__dirname, '.env');
const envFileContent = await fs.readFile(envPath, 'utf8');
const updatedEnvFileContent = envFileContent.replace(/VITE_APP_VERSION=.*/, `VITE_APP_VERSION=${packageJson.version}`);
await fs.writeFile(envPath, updatedEnvFileContent);

console.log(`Version updated to ${packageJson.version}`);