import { PRIZM_OLD_ICONS_REPLACE_SET } from './common';

export function prizmIconsGetNameByOld(oldName: string): string | null {
  return PRIZM_OLD_ICONS_REPLACE_SET[oldName as keyof typeof PRIZM_OLD_ICONS_REPLACE_SET] ?? null;
}

export function prizmIconsSvgGetNameByOld(oldName: string): string | null {
  const iconsNew = {
    charts_diagrams_charts_histogram_chart_dashed: 'bar-histogram',
    charts_diagrams_hexagon_axis: 'hexagons-axis',
    charts_diagrams_hexagon: 'hexagons',
    data_network_network_1: 'network-v1',
    data_network_network_2: 'network-v2',
    data_network_network_3: 'network-v3',
    editor_decor_square_bracket_curly_right_1: 'square-bracket-curly-right',
    data_network_server_close: 'server-network-close',
    data_network_server_download: 'server-network-download',
    data_network_server_minus: 'server-network-minus',
    data_network_server_plus: 'server-network-plus',
    data_network_server_upload: 'server-network-upload',
    data_network_server_security: 'server-network-security',
    data_network_server: 'server-network',
    data_network_server_one: 'server',
    other_map_marker_date_1: 'map-marker-date-v1',
    other_map_marker_date_2: 'map-marker-date-v2',
    production_industry_container_2: 'container-v2',
    production_industry_container: 'container-v1',
    production_industry_containers: 'containers',
    production_industry_respirator_1: 'respirator-v1',
    production_industry_respirator_2: 'respirator-v2',
    production_industry_respirator_3: 'respirator-v3',
    production_industry_respirator_4: 'respirator-v4',
    production_industry_respirator_5: 'respirator-v5',
    production_industry_respirator_6: 'respirator-v6',
    production_industry_pipeline: 'pipeline-v1',
    production_industry_pipeline_2: 'pipeline-v2',
    production_industry_tank_1: 'tank',
    production_industry_vial_arrow_rotate_left: 'vial-rotate-left',
    settings_tools_gear_5: 'gear-5-edge',
    settings_tools_gear_8: 'gear-8-edge',
    shape_geometry_circle_square_fill_1: 'circle-square',
    shape_geometry_shape_4_f: 'shape-link-fill',
    shape_geometry_shape_4: 'shape-link',
    shape_geometry_shape_6: 'hash',
    shape_geometry_shape_7: 'hash-dash',
    map_location_world: 'globe',
    map_location_world_2: 'earth',
    shape_geometry_triangle_circle_square_fill_1: 'triangle-circle-square',
    shape_geometry_square_triangle_circle_triangle_fill_1: 'square-triangle-circle-triangle',
  };

  Object.entries(iconsNew).forEach(([key, value]) => (oldName = key === oldName ? value : oldName));

  const folders = [
    'editor_decor',
    'charts_diagrams',
    'data_network',
    'date_time',
    'documents_folders',
    'logistics_transportation',
    'map_location',
    'multimedia_devices',
    'notifications_alerts',
    'other',
    'power_energy',
    'production_industry',
    'settings_tools',
    'shape_geometry',
    'user_account',
  ];

  const current_prefix = folders.filter(i => oldName.startsWith(i))?.[0];

  if (current_prefix) oldName = oldName.replace(new RegExp(`^${current_prefix}_`), '');

  const worlds = {
    chek: 'check',
  };

  Object.entries(worlds).forEach(([key, value]) => (oldName = oldName.replace(key, value)));

  return oldName.replace(/[_]+/g, '-') ?? null;
}
