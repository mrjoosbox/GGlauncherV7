self.__uv$config = {
    prefix: '/science/',
    bare:'https://bare.benrogo.net',
    encodeUrl: Ultraviolet.codec.xor.encode,
    decodeUrl: Ultraviolet.codec.xor.decode,
    handler: 'uv.handler.js',
    bundle: 'uv.bundle.js',
    config: 'uv.config.js',
    sw: 'uv.sw.js',
};
