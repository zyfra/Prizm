"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.prizmAstUpdateProjectVersions = void 0;
const devkit_1 = require("@nrwl/devkit");
const ast_1 = require("@prizm-ui/ast");
/**
 * Обновляет версию пакета в package.json для списка проектов.
 *
 * @param {Tree} tree - Представление файловой системы проекта.
 * @param {ProjectConfiguration[]} projects - Массив объектов конфигурации проектов.
 * @param {string} newVersion - Новая версия пакета.
 * @param {string} currentVersion - Установить версию для изменения вместо версии из package.json
 * @return {any[]} - Возвращает пустой массив.
 */
function prizmAstUpdateProjectVersions(tree, projects, newVersion, currentVersion, updateInDependencies = false) {
    let packages = [];
    if (updateInDependencies)
        packages = projects.map(project => {
            const path = [project.root, 'package.json'].join('/');
            const { name, version } = (0, devkit_1.readJson)(tree, path);
            return { name, version };
        });
    // Проходим по списку проектов
    projects.forEach(project => {
        // Формируем путь до файла package.json каждого проекта
        const path = [project.root, 'package.json'].join('/');
        // Читаем содержимое файла package.json
        // Обновляем поле version в считанном package.json
        // Обновляем файл package.json новыми данными
        (0, devkit_1.updateJson)(tree, path, packageJson => {
            // Обновляем поле version в считанном package.json
            const command = (0, ast_1.prizmSemVerParse)(newVersion, true);
            const versionObject = (0, ast_1.prizmSemVerUpdate)((0, ast_1.prizmSemVerParse)(currentVersion ?? packageJson.version), command);
            packageJson.version = (0, ast_1.prizmSemVerStringify)(versionObject);
            if (packages.length)
                packages.forEach(({ name, version }) => {
                    if (packageJson.dependencies?.[name]) {
                        packageJson.dependencies[name] = replaceVersionInDeps(packageJson.dependencies[name], version, packageJson.version);
                    }
                    if (packageJson.devDependencies?.[name]) {
                        packageJson.devDependencies[name] = replaceVersionInDeps(packageJson.devDependencies[name], version, packageJson.version);
                    }
                    if (packageJson.peerDependencies?.[name]) {
                        packageJson.peerDependencies[name] = replaceVersionInDeps(packageJson.peerDependencies[name], version, packageJson.version);
                    }
                });
            return packageJson;
        });
    });
    // Форматируем файлы в дереве для обеспечения соблюдения стиля кодирования
    return (0, devkit_1.formatFiles)(tree);
}
exports.prizmAstUpdateProjectVersions = prizmAstUpdateProjectVersions;
function replaceVersionInDeps(str, currentVersion, newVersion) {
    return str.replace(new RegExp(`(?<=\\D|^)${escapeRegExp(currentVersion)}(?=\\D|$)`, 'ig'), newVersion);
}
function escapeRegExp(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // $& означает всё найденное совпадение
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvYXN0L3NjaGVtYXRpY3MtaGVscGVycy9zcmMvdXBkYXRlLXByb2plY3QtdmVyc2lvbnMvdXRpbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSx5Q0FBNkY7QUFDN0YsdUNBQTBGO0FBRTFGOzs7Ozs7OztHQVFHO0FBQ0gsU0FBZ0IsNkJBQTZCLENBQzNDLElBQVUsRUFDVixRQUFnQyxFQUNoQyxVQUFrQixFQUNsQixjQUF1QixFQUN2QixvQkFBb0IsR0FBRyxLQUFLO0lBRTVCLElBQUksUUFBUSxHQUF3QyxFQUFFLENBQUM7SUFDdkQsSUFBSSxvQkFBb0I7UUFDdEIsUUFBUSxHQUFHLFFBQVEsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLEVBQUU7WUFDaEMsTUFBTSxJQUFJLEdBQUcsQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLGNBQWMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUN0RCxNQUFNLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxHQUFHLElBQUEsaUJBQVEsRUFBb0MsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO1lBQ2xGLE9BQU8sRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLENBQUM7UUFDM0IsQ0FBQyxDQUFDLENBQUM7SUFFTCw4QkFBOEI7SUFDOUIsUUFBUSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsRUFBRTtRQUN6Qix1REFBdUQ7UUFDdkQsTUFBTSxJQUFJLEdBQUcsQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLGNBQWMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUV0RCx1Q0FBdUM7UUFDdkMsa0RBQWtEO1FBQ2xELDZDQUE2QztRQUM3QyxJQUFBLG1CQUFVLEVBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxXQUFXLENBQUMsRUFBRTtZQUNuQyxrREFBa0Q7WUFDbEQsTUFBTSxPQUFPLEdBQUcsSUFBQSxzQkFBZ0IsRUFBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDbkQsTUFBTSxhQUFhLEdBQUcsSUFBQSx1QkFBaUIsRUFDckMsSUFBQSxzQkFBZ0IsRUFBQyxjQUFjLElBQUksV0FBVyxDQUFDLE9BQU8sQ0FBQyxFQUN2RCxPQUFPLENBQ1IsQ0FBQztZQUNGLFdBQVcsQ0FBQyxPQUFPLEdBQUcsSUFBQSwwQkFBb0IsRUFBQyxhQUFhLENBQUMsQ0FBQztZQUUxRCxJQUFJLFFBQVEsQ0FBQyxNQUFNO2dCQUNqQixRQUFRLENBQUMsT0FBTyxDQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLEVBQUUsRUFBRTtvQkFDckMsSUFBSSxXQUFXLENBQUMsWUFBWSxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUU7d0JBQ3BDLFdBQVcsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEdBQUcsb0JBQW9CLENBQ25ELFdBQVcsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEVBQzlCLE9BQU8sRUFDUCxXQUFXLENBQUMsT0FBTyxDQUNwQixDQUFDO3FCQUNIO29CQUNELElBQUksV0FBVyxDQUFDLGVBQWUsRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFO3dCQUN2QyxXQUFXLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxHQUFHLG9CQUFvQixDQUN0RCxXQUFXLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxFQUNqQyxPQUFPLEVBQ1AsV0FBVyxDQUFDLE9BQU8sQ0FDcEIsQ0FBQztxQkFDSDtvQkFDRCxJQUFJLFdBQVcsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFO3dCQUN4QyxXQUFXLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLEdBQUcsb0JBQW9CLENBQ3ZELFdBQVcsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsRUFDbEMsT0FBTyxFQUNQLFdBQVcsQ0FBQyxPQUFPLENBQ3BCLENBQUM7cUJBQ0g7Z0JBQ0gsQ0FBQyxDQUFDLENBQUM7WUFFTCxPQUFPLFdBQVcsQ0FBQztRQUNyQixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUMsQ0FBQyxDQUFDO0lBRUgsMEVBQTBFO0lBQzFFLE9BQU8sSUFBQSxvQkFBVyxFQUFDLElBQUksQ0FBQyxDQUFDO0FBQzNCLENBQUM7QUEvREQsc0VBK0RDO0FBRUQsU0FBUyxvQkFBb0IsQ0FBQyxHQUFXLEVBQUUsY0FBc0IsRUFBRSxVQUFrQjtJQUNuRixPQUFPLEdBQUcsQ0FBQyxPQUFPLENBQUMsSUFBSSxNQUFNLENBQUMsYUFBYSxZQUFZLENBQUMsY0FBYyxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsRUFBRSxVQUFVLENBQUMsQ0FBQztBQUN6RyxDQUFDO0FBQ0QsU0FBUyxZQUFZLENBQUMsTUFBYztJQUNsQyxPQUFPLE1BQU0sQ0FBQyxPQUFPLENBQUMscUJBQXFCLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQyx1Q0FBdUM7QUFDL0YsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGZvcm1hdEZpbGVzLCBQcm9qZWN0Q29uZmlndXJhdGlvbiwgcmVhZEpzb24sIFRyZWUsIHVwZGF0ZUpzb24gfSBmcm9tICdAbnJ3bC9kZXZraXQnO1xuaW1wb3J0IHsgcHJpem1TZW1WZXJQYXJzZSwgcHJpem1TZW1WZXJTdHJpbmdpZnksIHByaXptU2VtVmVyVXBkYXRlIH0gZnJvbSAnQHByaXptLXVpL2FzdCc7XG5cbi8qKlxuICog0J7QsdC90L7QstC70Y/QtdGCINCy0LXRgNGB0LjRjiDQv9Cw0LrQtdGC0LAg0LIgcGFja2FnZS5qc29uINC00LvRjyDRgdC/0LjRgdC60LAg0L/RgNC+0LXQutGC0L7Qsi5cbiAqXG4gKiBAcGFyYW0ge1RyZWV9IHRyZWUgLSDQn9GA0LXQtNGB0YLQsNCy0LvQtdC90LjQtSDRhNCw0LnQu9C+0LLQvtC5INGB0LjRgdGC0LXQvNGLINC/0YDQvtC10LrRgtCwLlxuICogQHBhcmFtIHtQcm9qZWN0Q29uZmlndXJhdGlvbltdfSBwcm9qZWN0cyAtINCc0LDRgdGB0LjQsiDQvtCx0YrQtdC60YLQvtCyINC60L7QvdGE0LjQs9GD0YDQsNGG0LjQuCDQv9GA0L7QtdC60YLQvtCyLlxuICogQHBhcmFtIHtzdHJpbmd9IG5ld1ZlcnNpb24gLSDQndC+0LLQsNGPINCy0LXRgNGB0LjRjyDQv9Cw0LrQtdGC0LAuXG4gKiBAcGFyYW0ge3N0cmluZ30gY3VycmVudFZlcnNpb24gLSDQo9GB0YLQsNC90L7QstC40YLRjCDQstC10YDRgdC40Y4g0LTQu9GPINC40LfQvNC10L3QtdC90LjRjyDQstC80LXRgdGC0L4g0LLQtdGA0YHQuNC4INC40LcgcGFja2FnZS5qc29uXG4gKiBAcmV0dXJuIHthbnlbXX0gLSDQktC+0LfQstGA0LDRidCw0LXRgiDQv9GD0YHRgtC+0Lkg0LzQsNGB0YHQuNCyLlxuICovXG5leHBvcnQgZnVuY3Rpb24gcHJpem1Bc3RVcGRhdGVQcm9qZWN0VmVyc2lvbnMoXG4gIHRyZWU6IFRyZWUsXG4gIHByb2plY3RzOiBQcm9qZWN0Q29uZmlndXJhdGlvbltdLFxuICBuZXdWZXJzaW9uOiBzdHJpbmcsXG4gIGN1cnJlbnRWZXJzaW9uPzogc3RyaW5nLFxuICB1cGRhdGVJbkRlcGVuZGVuY2llcyA9IGZhbHNlXG4pOiBQcm9taXNlPHZvaWQ+IHtcbiAgbGV0IHBhY2thZ2VzOiB7IG5hbWU6IHN0cmluZzsgdmVyc2lvbjogc3RyaW5nIH1bXSA9IFtdO1xuICBpZiAodXBkYXRlSW5EZXBlbmRlbmNpZXMpXG4gICAgcGFja2FnZXMgPSBwcm9qZWN0cy5tYXAocHJvamVjdCA9PiB7XG4gICAgICBjb25zdCBwYXRoID0gW3Byb2plY3Qucm9vdCwgJ3BhY2thZ2UuanNvbiddLmpvaW4oJy8nKTtcbiAgICAgIGNvbnN0IHsgbmFtZSwgdmVyc2lvbiB9ID0gcmVhZEpzb248eyBuYW1lOiBzdHJpbmc7IHZlcnNpb246IHN0cmluZyB9Pih0cmVlLCBwYXRoKTtcbiAgICAgIHJldHVybiB7IG5hbWUsIHZlcnNpb24gfTtcbiAgICB9KTtcblxuICAvLyDQn9GA0L7RhdC+0LTQuNC8INC/0L4g0YHQv9C40YHQutGDINC/0YDQvtC10LrRgtC+0LJcbiAgcHJvamVjdHMuZm9yRWFjaChwcm9qZWN0ID0+IHtcbiAgICAvLyDQpNC+0YDQvNC40YDRg9C10Lwg0L/Rg9GC0Ywg0LTQviDRhNCw0LnQu9CwIHBhY2thZ2UuanNvbiDQutCw0LbQtNC+0LPQviDQv9GA0L7QtdC60YLQsFxuICAgIGNvbnN0IHBhdGggPSBbcHJvamVjdC5yb290LCAncGFja2FnZS5qc29uJ10uam9pbignLycpO1xuXG4gICAgLy8g0KfQuNGC0LDQtdC8INGB0L7QtNC10YDQttC40LzQvtC1INGE0LDQudC70LAgcGFja2FnZS5qc29uXG4gICAgLy8g0J7QsdC90L7QstC70Y/QtdC8INC/0L7Qu9C1IHZlcnNpb24g0LIg0YHRh9C40YLQsNC90L3QvtC8IHBhY2thZ2UuanNvblxuICAgIC8vINCe0LHQvdC+0LLQu9GP0LXQvCDRhNCw0LnQuyBwYWNrYWdlLmpzb24g0L3QvtCy0YvQvNC4INC00LDQvdC90YvQvNC4XG4gICAgdXBkYXRlSnNvbih0cmVlLCBwYXRoLCBwYWNrYWdlSnNvbiA9PiB7XG4gICAgICAvLyDQntCx0L3QvtCy0LvRj9C10Lwg0L/QvtC70LUgdmVyc2lvbiDQsiDRgdGH0LjRgtCw0L3QvdC+0LwgcGFja2FnZS5qc29uXG4gICAgICBjb25zdCBjb21tYW5kID0gcHJpem1TZW1WZXJQYXJzZShuZXdWZXJzaW9uLCB0cnVlKTtcbiAgICAgIGNvbnN0IHZlcnNpb25PYmplY3QgPSBwcml6bVNlbVZlclVwZGF0ZShcbiAgICAgICAgcHJpem1TZW1WZXJQYXJzZShjdXJyZW50VmVyc2lvbiA/PyBwYWNrYWdlSnNvbi52ZXJzaW9uKSxcbiAgICAgICAgY29tbWFuZFxuICAgICAgKTtcbiAgICAgIHBhY2thZ2VKc29uLnZlcnNpb24gPSBwcml6bVNlbVZlclN0cmluZ2lmeSh2ZXJzaW9uT2JqZWN0KTtcblxuICAgICAgaWYgKHBhY2thZ2VzLmxlbmd0aClcbiAgICAgICAgcGFja2FnZXMuZm9yRWFjaCgoeyBuYW1lLCB2ZXJzaW9uIH0pID0+IHtcbiAgICAgICAgICBpZiAocGFja2FnZUpzb24uZGVwZW5kZW5jaWVzPy5bbmFtZV0pIHtcbiAgICAgICAgICAgIHBhY2thZ2VKc29uLmRlcGVuZGVuY2llc1tuYW1lXSA9IHJlcGxhY2VWZXJzaW9uSW5EZXBzKFxuICAgICAgICAgICAgICBwYWNrYWdlSnNvbi5kZXBlbmRlbmNpZXNbbmFtZV0sXG4gICAgICAgICAgICAgIHZlcnNpb24sXG4gICAgICAgICAgICAgIHBhY2thZ2VKc29uLnZlcnNpb25cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChwYWNrYWdlSnNvbi5kZXZEZXBlbmRlbmNpZXM/LltuYW1lXSkge1xuICAgICAgICAgICAgcGFja2FnZUpzb24uZGV2RGVwZW5kZW5jaWVzW25hbWVdID0gcmVwbGFjZVZlcnNpb25JbkRlcHMoXG4gICAgICAgICAgICAgIHBhY2thZ2VKc29uLmRldkRlcGVuZGVuY2llc1tuYW1lXSxcbiAgICAgICAgICAgICAgdmVyc2lvbixcbiAgICAgICAgICAgICAgcGFja2FnZUpzb24udmVyc2lvblxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHBhY2thZ2VKc29uLnBlZXJEZXBlbmRlbmNpZXM/LltuYW1lXSkge1xuICAgICAgICAgICAgcGFja2FnZUpzb24ucGVlckRlcGVuZGVuY2llc1tuYW1lXSA9IHJlcGxhY2VWZXJzaW9uSW5EZXBzKFxuICAgICAgICAgICAgICBwYWNrYWdlSnNvbi5wZWVyRGVwZW5kZW5jaWVzW25hbWVdLFxuICAgICAgICAgICAgICB2ZXJzaW9uLFxuICAgICAgICAgICAgICBwYWNrYWdlSnNvbi52ZXJzaW9uXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgIHJldHVybiBwYWNrYWdlSnNvbjtcbiAgICB9KTtcbiAgfSk7XG5cbiAgLy8g0KTQvtGA0LzQsNGC0LjRgNGD0LXQvCDRhNCw0LnQu9GLINCyINC00LXRgNC10LLQtSDQtNC70Y8g0L7QsdC10YHQv9C10YfQtdC90LjRjyDRgdC+0LHQu9GO0LTQtdC90LjRjyDRgdGC0LjQu9GPINC60L7QtNC40YDQvtCy0LDQvdC40Y9cbiAgcmV0dXJuIGZvcm1hdEZpbGVzKHRyZWUpO1xufVxuXG5mdW5jdGlvbiByZXBsYWNlVmVyc2lvbkluRGVwcyhzdHI6IHN0cmluZywgY3VycmVudFZlcnNpb246IHN0cmluZywgbmV3VmVyc2lvbjogc3RyaW5nKSB7XG4gIHJldHVybiBzdHIucmVwbGFjZShuZXcgUmVnRXhwKGAoPzw9XFxcXER8Xikke2VzY2FwZVJlZ0V4cChjdXJyZW50VmVyc2lvbil9KD89XFxcXER8JClgLCAnaWcnKSwgbmV3VmVyc2lvbik7XG59XG5mdW5jdGlvbiBlc2NhcGVSZWdFeHAoc3RyaW5nOiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gc3RyaW5nLnJlcGxhY2UoL1suKis/XiR7fSgpfFtcXF1cXFxcXS9nLCAnXFxcXCQmJyk7IC8vICQmINC+0LfQvdCw0YfQsNC10YIg0LLRgdGRINC90LDQudC00LXQvdC90L7QtSDRgdC+0LLQv9Cw0LTQtdC90LjQtVxufVxuIl19