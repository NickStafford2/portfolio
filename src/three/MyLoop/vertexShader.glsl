
uniform sampler2D uPositions;
uniform float uTime;

void main() {
    vec3 pos = texture2D(uPositions, position.xy).xyz;

    vec4 modelPosition = modelMatrix * vec4(pos, 1.0);
    vec4 viewPosition = viewMatrix * modelPosition;
    vec4 projectedPosition = projectionMatrix * viewPosition;

    gl_Position = projectedPosition;

    gl_PointSize = 3.0;
    // Size attenuation;
    gl_PointSize *= step(1.0 - (1.0 / 64.0), position.x) + 0.5;
}
// uniform float uTime;
// uniform float uRadius;
//
// // Source: https://github.com/dmnsgn/glsl-rotate/blob/main/rotation-3d-y.glsl.js
// mat3 rotation3dY(float angle) {
//     float s = sin(angle);
//     float c = cos(angle);
//     return mat3(
//         c, 0.0, -s,
//         0.0, 1.0, 0.0,
//         s, 0.0, c
//     );
// }
//
// // Sources: https://github.com/davidson16807/tectonics.glsl/blob/master/math/geometry/sphere.glsl
// /*
// A0 point position
// B0 sphere origin
// r  radius
// */
// float get_distance_of_3d_point_to_sphere(in vec3 A0, in vec3 B0, in float r) {
//     return length(A0 - B0) - r;
// }
//
// /*
// A0 point position
// B0 sphere origin
// r  radius
// */
// bool is_3d_point_in_sphere(in vec3 A0, in vec3 B0, in float r) {
//     return length(A0 - B0) < r;
// }
//
// vec3 forces2(vec3 positionStart) {
//     float dt = 0.1;
//     float dx = dt / pow(positionStart.x, 2.0);
//     float dy = dt / pow(positionStart.y, 2.0);
//     float dz = dt / pow(positionStart.z, 2.0);
//     return vec3(
//         positionStart.x + 1.0,
//         positionStart.y + dy,
//         positionStart.z + dz
//     );
// }
//
// mat4 forces(vec3 positionStart) {
//     float dt = 0.1;
//     float dx = dt / pow(positionStart.x, 2.0);
//     float dy = dt / pow(positionStart.y, 2.0);
//     float dz = dt / pow(positionStart.z, 2.0);
//     return mat4(
//         1.0, 0.0, 0.0, dx,
//         0.0, 1.0, 0.0, dy,
//         0.0, 0.0, 1.0, dz,
//         0.0, 0.0, 0.0, 1.0
//     );
// }
//
// void main() {
//     // vec3 pos = texture2D(uPositions, position.xy).xyz;
//
//     // float distanceFromOrigin = distance(position, vec3(0.0));
//     // float forceGravity = 1.0 / pow(distanceFromOrigin, 2.0);
//     // float distanceMoved = position - forceGravity * uTime;
//     // vec3 particleNormal = normalize(position);
//     // float distanceFactor = pow(uRadius - distance(position, vec3(0.0)), 1.5);
//     // vec3 particlePosition = position * rotation3dY(uTime * 0.3 * distanceFactor);
//
//     // vec4 particlePosition = vec4(position, 1.0);
//     // vec4 particalPosition2 = particlePosition * forces(position);
//     // vec4 modelPosition = modelMatrix * particlePosition2;
//
//     vec3 particlePosition = forces2(position);
//     // vec4 particalPosition2 = particlePosition * forces(position);
//     vec4 modelPosition = modelMatrix * vec4(particlePosition, 1.0);
//
//     // vec3 particlePosition = vec4(position * forces(position));
//     // vec4 modelPosition = modelMatrix * vec4(particlePosition, 1.0);
//     vec4 viewPosition = viewMatrix * modelPosition;
//     vec4 projectedPosition = projectionMatrix * viewPosition;
//
//     gl_Position = projectedPosition;
//     gl_PointSize = 3.0;
// }
