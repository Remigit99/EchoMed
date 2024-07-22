"use client"
import { useEffect, useRef } from 'react';
import { ZegoExpressEngine } from 'zego-express-engine-webrtc';

const VideoConference = () => {
  const localStreamRef = useRef(null);
  const remoteStreamRef = useRef(null);

  useEffect(() => {
    // const appID = process.env.NEXT_PUBLIC_ZEGOCLOUD_APP_ID;
    const appID = 590597291;
    // const appSign = process.env.NEXT_PUBLIC_ZEGOCLOUD_APP_SIGN;
    const appSign = "334dba397132aaee76b0bf92303ff4e6630c8c7bfbb9725c11fabfe875aa7075";
    // const userID = 'user_' + new Date().getTime();
    // const userName = 'user_' + new Date().getTime();
    const userID = "echo1991";
    const userName = "RemiEcho";
    const roomID = 'room_123';

    // 5d0338dcc3255fc2392f8b4274cb736b

    // 04AAAAAGaZdeMAEHB1cDh6YXRvc3VtZXpqdG8AsAQQswCgG+rGFtlnfI2ohaz8oEZ2qYYxYeh8AcS8i74egzc/0mU9XeHJSGY1W7IFFOtHdOn6YniA4VGqa541UBrW2ZGlQO5cEQFuog34xVJ7kI3Hff5Pmd79phwbgMW27yVe9DppdLSmoifpzen9JRyUPDjHCemJztL6upkSJeJZZgeMTJ15+fkuWyBJs+UOpiN62fK9QFsk0Y2V3I6rH6zOMo876FEkICe7arbwD/XO

    const zegoEngine = new ZegoExpressEngine(appID, appSign);

    const loginAndStartStreaming = async () => {
      await zegoEngine.loginRoom(roomID, { userID, userName }, { userUpdate: true });

      const localStream = await zegoEngine.createStream({ camera: { videoQuality: 1 } });
      localStreamRef.current.srcObject = localStream;
      await zegoEngine.startPublishingStream('stream_123', localStream);

      zegoEngine.on('roomStreamUpdate', async (roomID, updateType, streamList) => {
        if (updateType === 'ADD') {
          const remoteStream = await zegoEngine.startPlayingStream(streamList[0].streamID);
          remoteStreamRef.current.srcObject = remoteStream;
        }
      });
    };

    loginAndStartStreaming();

    return () => {
      zegoEngine.stopPublishingStream('stream_123');
      zegoEngine.logoutRoom(roomID);
    };
  }, []);

  return (
    <div>
      <video ref={localStreamRef} autoPlay playsInline></video>
      <video ref={remoteStreamRef} autoPlay playsInline></video>
    </div>
  );
};

export default VideoConference;
