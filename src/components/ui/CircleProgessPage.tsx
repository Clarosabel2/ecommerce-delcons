import React from 'react'
import { OrbitProgress } from 'react-loading-indicators';

export default function CircleProgessPage() {
  return (
            <div className="flex items-center justify-around w-screen h-screen">
                <OrbitProgress
                    color="#2896b9"
                    size="medium"
                    text=""
                    textColor=""
                />
            </div>
        );
}
