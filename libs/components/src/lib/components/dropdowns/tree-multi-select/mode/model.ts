/**
 * Тип, определяющий режим работы компонента Prizm Tree MultiSelect.
 *
 * @type {PrizmTreeMultiSelectMode}
 *
 * - `'only-current'`: В этом режиме:
 *    1. При выборе элемента дерева (потомка или родителя), его статус обновляется
 *       отдельно, без автоматического изменения статусов родителей или потомков.
 *    2. Если выбрано несколько элементов, каждый из них добавляется вручную
 *       и независимо от других.
 *    3. Родительские узлы не становятся автоматически "выбранными", даже если
 *       все их потомки выбраны. Аналогично, если выбран родитель, его потомки
 *       остаются неизменными.
 *    4. Все действия по выбору выполняются вручную, что дает полный контроль
 *       над состоянием каждого элемента.
 *
 *   Пример: Если выбрать один элемент (потомка или родителя), остальные элементы
 *   дерева (включая его родителей и потомков) остаются в текущем состоянии,
 *   и их статус не изменяется.
 *
 * - `'auto-select'`: В этом режиме:
 *    1. Родительский узел становится "выбранным", если выбраны **все его потомки**.
 *       Это обновление происходит автоматически.
 *    2. Если выбран только родитель, все его потомки автоматически считаются
 *       "выбранными". Пользователю не нужно выбирать их вручную.
 *    3. Выбор элементов синхронизирован между узлами дерева, что упрощает выбор
 *       больших групп.
 *
 *   Пример: Если пользователь выбирает всех потомков одного родителя, родитель
 *   автоматически получает статус "выбран". Если выбран только родитель, то все
 *   его потомки также автоматически считаются "выбранными".
 */
export type PrizmTreeMultiSelectMode = 'only-current' | 'auto-select';