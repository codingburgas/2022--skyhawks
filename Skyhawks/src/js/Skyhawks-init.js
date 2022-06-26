import { options } from './parts/_options';

if (typeof SKYHAWKS !== 'undefined') {
    SKYHAWKS.setOptions(options);
    SKYHAWKS.init();
}
