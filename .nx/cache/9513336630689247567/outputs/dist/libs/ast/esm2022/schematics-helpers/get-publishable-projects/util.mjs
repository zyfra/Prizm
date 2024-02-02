"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.prizmAstGetPublishableProjects = void 0;
const devkit_1 = require("@nrwl/devkit");
/**
 * Ищет все публикуемые проекты (те, что имеют package.json) в workspace.
 *
 * @param {Tree} tree - Представление файловой системы проекта.
 * @return {ProjectConfiguration[]} - Массив объектов конфигурации проектов с файлами package.json.
 */
function prizmAstGetPublishableProjects(tree) {
    // Получаем конфигурации всех проектов в рабочем пространстве
    const projects = (0, devkit_1.getProjects)(tree);
    // Получаем имена всех проектов
    const projectNames = [...projects.keys()];
    // Фильтруем имена проектов, проверяя наличие файла package.json в корне каждого проекта
    return projectNames
        .filter(name => {
        const project = (0, devkit_1.readProjectConfiguration)(tree, name);
        const packageJsonPath = `${project.root}/package.json`;
        // Если файл package.json существует в проекте, включаем его в итоговый список
        return tree.exists(packageJsonPath);
    })
        // Маппим имена проектов обратно в конфигурации проектов
        .map(i => projects.get(i));
}
exports.prizmAstGetPublishableProjects = prizmAstGetPublishableProjects;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvYXN0L3NjaGVtYXRpY3MtaGVscGVycy9zcmMvZ2V0LXB1Ymxpc2hhYmxlLXByb2plY3RzL3V0aWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEseUNBQWlHO0FBRWpHOzs7OztHQUtHO0FBQ0gsU0FBZ0IsOEJBQThCLENBQUMsSUFBVTtJQUN2RCw2REFBNkQ7SUFDN0QsTUFBTSxRQUFRLEdBQUcsSUFBQSxvQkFBVyxFQUFDLElBQUksQ0FBQyxDQUFDO0lBRW5DLCtCQUErQjtJQUMvQixNQUFNLFlBQVksR0FBRyxDQUFDLEdBQUcsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7SUFFMUMsd0ZBQXdGO0lBQ3hGLE9BQ0UsWUFBWTtTQUNULE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRTtRQUNiLE1BQU0sT0FBTyxHQUFHLElBQUEsaUNBQXdCLEVBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ3JELE1BQU0sZUFBZSxHQUFHLEdBQUcsT0FBTyxDQUFDLElBQUksZUFBZSxDQUFDO1FBRXZELDhFQUE4RTtRQUM5RSxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsZUFBZSxDQUFDLENBQUM7SUFDdEMsQ0FBQyxDQUFDO1FBQ0Ysd0RBQXdEO1NBQ3ZELEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQzVCLENBQUM7QUFDSixDQUFDO0FBcEJELHdFQW9CQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdldFByb2plY3RzLCBQcm9qZWN0Q29uZmlndXJhdGlvbiwgcmVhZFByb2plY3RDb25maWd1cmF0aW9uLCBUcmVlIH0gZnJvbSAnQG5yd2wvZGV2a2l0JztcblxuLyoqXG4gKiDQmNGJ0LXRgiDQstGB0LUg0L/Rg9Cx0LvQuNC60YPQtdC80YvQtSDQv9GA0L7QtdC60YLRiyAo0YLQtSwg0YfRgtC+INC40LzQtdGO0YIgcGFja2FnZS5qc29uKSDQsiB3b3Jrc3BhY2UuXG4gKlxuICogQHBhcmFtIHtUcmVlfSB0cmVlIC0g0J/RgNC10LTRgdGC0LDQstC70LXQvdC40LUg0YTQsNC50LvQvtCy0L7QuSDRgdC40YHRgtC10LzRiyDQv9GA0L7QtdC60YLQsC5cbiAqIEByZXR1cm4ge1Byb2plY3RDb25maWd1cmF0aW9uW119IC0g0JzQsNGB0YHQuNCyINC+0LHRitC10LrRgtC+0LIg0LrQvtC90YTQuNCz0YPRgNCw0YbQuNC4INC/0YDQvtC10LrRgtC+0LIg0YEg0YTQsNC50LvQsNC80LggcGFja2FnZS5qc29uLlxuICovXG5leHBvcnQgZnVuY3Rpb24gcHJpem1Bc3RHZXRQdWJsaXNoYWJsZVByb2plY3RzKHRyZWU6IFRyZWUpOiBQcm9qZWN0Q29uZmlndXJhdGlvbltdIHtcbiAgLy8g0J/QvtC70YPRh9Cw0LXQvCDQutC+0L3RhNC40LPRg9GA0LDRhtC40Lgg0LLRgdC10YUg0L/RgNC+0LXQutGC0L7QsiDQsiDRgNCw0LHQvtGH0LXQvCDQv9GA0L7RgdGC0YDQsNC90YHRgtCy0LVcbiAgY29uc3QgcHJvamVjdHMgPSBnZXRQcm9qZWN0cyh0cmVlKTtcblxuICAvLyDQn9C+0LvRg9GH0LDQtdC8INC40LzQtdC90LAg0LLRgdC10YUg0L/RgNC+0LXQutGC0L7QslxuICBjb25zdCBwcm9qZWN0TmFtZXMgPSBbLi4ucHJvamVjdHMua2V5cygpXTtcblxuICAvLyDQpNC40LvRjNGC0YDRg9C10Lwg0LjQvNC10L3QsCDQv9GA0L7QtdC60YLQvtCyLCDQv9GA0L7QstC10YDRj9GPINC90LDQu9C40YfQuNC1INGE0LDQudC70LAgcGFja2FnZS5qc29uINCyINC60L7RgNC90LUg0LrQsNC20LTQvtCz0L4g0L/RgNC+0LXQutGC0LBcbiAgcmV0dXJuIChcbiAgICBwcm9qZWN0TmFtZXNcbiAgICAgIC5maWx0ZXIobmFtZSA9PiB7XG4gICAgICAgIGNvbnN0IHByb2plY3QgPSByZWFkUHJvamVjdENvbmZpZ3VyYXRpb24odHJlZSwgbmFtZSk7XG4gICAgICAgIGNvbnN0IHBhY2thZ2VKc29uUGF0aCA9IGAke3Byb2plY3Qucm9vdH0vcGFja2FnZS5qc29uYDtcblxuICAgICAgICAvLyDQldGB0LvQuCDRhNCw0LnQuyBwYWNrYWdlLmpzb24g0YHRg9GJ0LXRgdGC0LLRg9C10YIg0LIg0L/RgNC+0LXQutGC0LUsINCy0LrQu9GO0YfQsNC10Lwg0LXQs9C+INCyINC40YLQvtCz0L7QstGL0Lkg0YHQv9C40YHQvtC6XG4gICAgICAgIHJldHVybiB0cmVlLmV4aXN0cyhwYWNrYWdlSnNvblBhdGgpO1xuICAgICAgfSlcbiAgICAgIC8vINCc0LDQv9C/0LjQvCDQuNC80LXQvdCwINC/0YDQvtC10LrRgtC+0LIg0L7QsdGA0LDRgtC90L4g0LIg0LrQvtC90YTQuNCz0YPRgNCw0YbQuNC4INC/0YDQvtC10LrRgtC+0LJcbiAgICAgIC5tYXAoaSA9PiBwcm9qZWN0cy5nZXQoaSkpIGFzIGFueVxuICApO1xufVxuIl19