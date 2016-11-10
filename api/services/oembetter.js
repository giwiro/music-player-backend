import oembetterLib from 'oembetter'

const oembetter = oembetterLib();

oembetter.whitelist([ 'youtube.com', 'vimeo.com', 'wufoo.com' ]);

export default oembetter;