import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

const Plexus = () => {
  const { viewport } = useThree();
  const lineRef = useRef();
  const pointsRef = useRef();

  const numPoints = 100;
  const maxDist = 8;
  const speedFactor = 0.05;

  const points = useMemo(() => {
    return Array.from({ length: numPoints }, () => ({
      position: new THREE.Vector3(
        (Math.random() - 0.5) * viewport.width,
        (Math.random() - 0.5) * viewport.height,
        (Math.random() - 0.5) * 20
      ),
      velocity: new THREE.Vector3(
        (Math.random() - 0.5) * speedFactor,
        (Math.random() - 0.5) * speedFactor,
        (Math.random() - 0.5) * speedFactor
      ),
    }));
  }, [numPoints, viewport.width, viewport.height]);

  useFrame(({ viewport }) => {
    const positions = [];
    const lineVertices = [];

    points.forEach(point => {
      point.position.add(point.velocity);

      if (point.position.x < -viewport.width / 2 || point.position.x > viewport.width / 2) point.velocity.x *= -1;
      if (point.position.y < -viewport.height / 2 || point.position.y > viewport.height / 2) point.velocity.y *= -1;
      if (point.position.z < -10 || point.position.z > 10) point.velocity.z *= -1;

      positions.push(point.position.x, point.position.y, point.position.z);
    });

    for (let i = 0; i < numPoints; i++) {
      for (let j = i + 1; j < numPoints; j++) {
        const p1 = points[i].position;
        const p2 = points[j].position;
        if (p1.distanceTo(p2) < maxDist) {
          lineVertices.push(p1.x, p1.y, p1.z);
          lineVertices.push(p2.x, p2.y, p2.z);
        }
      }
    }

    pointsRef.current.geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
    lineRef.current.geometry.setAttribute('position', new THREE.Float32BufferAttribute(lineVertices, 3));
  });

  return (
    <>
      <points ref={pointsRef}>
        <bufferGeometry />
        <pointsMaterial color="#facc15" size={1.0} sizeAttenuation={false} />
      </points>
      <lineSegments ref={lineRef}>
        <bufferGeometry />
        <lineBasicMaterial color="#f59e0b" transparent opacity={0.2} linewidth={2} />
      </lineSegments>
    </>
  );
};

const Hero3D = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full -z-10">
      <Canvas camera={{ position: [0, 0, 25] }}>
        <color attach="background" args={['#000000']} />
        <Plexus />
      </Canvas>
    </div>
  );
};

export default Hero3D;
