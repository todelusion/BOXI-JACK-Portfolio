const fragmentShader = `
uniform float u_intensity;
uniform float u_time;

varying vec2 vUv;
varying float vDisplacement;

void main() {
    float distort = 2.0 * vDisplacement * u_intensity * sin(vUv.y * 10.0 + u_time);
    
    // 設置不同的顏色值
    vec3 topColor = vec3(249.0/255.0, 147.0/255.0, 205.0/255.0); // #F993CD
    vec3 bottomColor = vec3(252.0/255.0, 237.0/255.0, 244.0/255.0); // #FCEDF4
    vec3 color = mix(bottomColor, topColor, vUv.y + distort);
    
    gl_FragColor = vec4(color, 1.0);
}
`;

export default fragmentShader;
