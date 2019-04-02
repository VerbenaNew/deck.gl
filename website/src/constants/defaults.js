
export const MAPBOX_STYLES = {
  // LIGHT: 'mapbox://styles/uberdata/cive48w2e001a2imn5mcu2vrs',
  // DARK: 'mapbox://styles/uberdata/cive485h000192imn6c6cc8fc',
  LIGHT: 'mapbox://styles/mapbox/light-v9',
  DARK: 'mapbox://styles/mapbox/light-v9',
  BLANK: {
    version: 8,
    sources: {},
    layers: []
  }
};

export const DEFAULT_MAP_STATE = {
  width: 0,
  height: 0,
  viewState: {
    latitude: 37.7749295,
    longitude: -122.4194155,
    zoom: 11,
    bearing: 0,
    pitch: 0
  }
};

export const DEFAULT_VIS_STATE = {
  owner: null,
  meta: {},
  data: null,
  params: {}
};

export const DEFAULT_APP_STATE = {
  headerOpacity: 1,
  isMenuOpen: false
};

export const DATA_URI = 'https://raw.githubusercontent.com/uber-common/deck.gl-data/master/website';
