const FLAG_PRODUCTION = true;
const FLAG_PRODUCTION_MINIMAL = false && FLAG_PRODUCTION;

const FLAG_CULL_FACES = true;
const FLAG_SQUARE_IMAGE = true;
const FLAG_SHOW_GL_ERRORS = true && !FLAG_PRODUCTION_MINIMAL;
const FLAG_LONG_SHADER_NAMES = true && !FLAG_PRODUCTION_MINIMAL;
const FLAG_AVOID_GL_WARNINGS = true && !FLAG_PRODUCTION_MINIMAL;
const FLAG_CANVAS_LIGHTING = false;
const FLAG_SHOW_FPS = false;
const FLAG_WEBGL_DISABLE_ANTIALIAS = false;
const FLAG_CHECK_ROOM_SIZE = false;
const FLAG_DEBUG_MODELS = false;
const FLAG_PRINT_BADGES = false;
const FLAG_AUDIO_SET_DISTANCE_MODEL_EXPONENTIAL = true && !FLAG_PRODUCTION_MINIMAL;
const FLAG_MINIMAL_AUDIO_CLEANUP = false || FLAG_PRODUCTION_MINIMAL;
const FLAG_CHECK_WEBKIT_AUDIO_CONTEXT = true && !FLAG_PRODUCTION_MINIMAL;
const FLAG_USE_GL_CONSTANTS = false && !FLAG_PRODUCTION_MINIMAL;
const FLAG_FLICKERING_LIGHTS = true;
const FLAG_INVISIBLE_DOORS = true;
const FLAG_RENDER_FRUSTUM_CULLING = true;
const FLAG_RENDER_BEHIND_CULLING = true;
const FLAG_RENDER_RADIUS_CULLING = true;
const FLAG_SHOW_ALIEN_BADGE = true;
const FLAG_RANDOM_PLAYER_COLORS = true && !FLAG_PRODUCTION_MINIMAL;
const FLAG_SCALE_BADGES = false; // doesn't work very well