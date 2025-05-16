import React from 'react';
import { Container, Tab, Tabs, Card } from 'react-bootstrap';
import { FaInfoCircle, FaHandPaper, FaVideo, FaCog } from 'react-icons/fa';

const GuidePage = () => {
  return (
    <div className='guidepage min-vh-100'>
        <Container>
            <h3 className='fw-bold'>How to Use SiLa</h3>
            <Tabs defaultActiveKey="getting-started" id="justify-tab-example" className="mb-3" justify>
                <Tab eventKey="getting-started" 
                    title={
                    <span>
                        <FaInfoCircle className='me-2' />
                        Getting Started
                    </span>
                }>
                    <Card body className='fade-up'>
                        <h4>Getting Started with SiLa</h4>
                        <p>Learn the basics of using Sisa for sign language translation</p>

                        <h5>What is SiLa?</h5>
                        <p>SiLa is a powerful sign language translation tool that uses advanced AI to translate between sign language and text. It supports both real-time gesture translation and video translation.</p>

                        <h5>Key Features</h5>
                        <ul>
                            <li>Real-time gesture translation using your camera</li>
                            <li>Video translation for pre-recorded content</li>
                            <li>Support for multiple sign languages</li>
                            <li>Text-to-speech for translated content</li>
                            <li>History of your translations</li>
                        </ul>

                        <h5>System Requirements</h5>
                        <p>SiLa works best on modern browsers like Chrome, Firefox, Safari, and Edge. For gesture translation, you'll need a webcam or camera on your device.</p>
                    </Card>
                </Tab>

                <Tab eventKey="gesture-translation" title={
                    <span>
                        <FaHandPaper className='me-2' />
                        Gesture Translation
                    </span>
                }>
                    <Card body className='fade-up'>
                        <h4>Gesture Translation Guide</h4>
                        <p>Learn how to use the gesture translation feature</p>

                        <h5>Using Gesture Translation</h5>
                        <ol>
                            <li>
                                <strong>Access the Gesture Translator</strong>
                                <p>Navigate to the "Gesture Translator" section from the main menu.</p>
                            </li>
                            <li>
                                <strong>Allow Camera Access</strong>
                                <p>When prompted, allow Sisa to access your camera for real-time translation.</p>
                            </li>
                            <li>
                                <strong>Start Recording</strong>
                                <p>Click the "Start Recording" button to begin capturing your gestures.</p>
                            </li>
                            <li>
                                <strong>Perform Sign Language</strong>
                                <p>Make sure your hands are clearly visible in the frame as you sign.</p>
                            </li>
                            <li>
                                <strong>View Translation</strong>
                                <p>The translation will appear in the result panel on the right.</p>
                            </li>
                        </ol>

                        <h5>Tips for Better Results</h5>
                        <ul>
                            <li>Ensure good lighting so your gestures are clearly visible</li>
                            <li>Position yourself so your upper body and hands are in the frame</li>
                            <li>Sign at a moderate pace for the best recognition</li>
                            <li>Wear solid-colored clothing that contrasts with your skin tone</li>
                        </ul>
                    </Card>
                </Tab>

                <Tab eventKey="video-translation" title={
                    <span>
                        <FaVideo className='me-2' />
                        Video Translation
                    </span>
                }>
                    <Card body className='fade-up'>
                        <h4>Video Translation Guide</h4>
                        <p>Learn how to use the video translation feature</p>

                        <h5>Using Video Translation</h5>
                        <ol>
                            <li>
                                <strong>Access the Video Translator</strong>
                                <p>Navigate to the "Video Translator" section from the main menu.</p>
                            </li>
                            <li>
                                <strong>Upload a Video</strong>
                                <p>Click "Select Video" or drag and drop a video file into the upload area.</p>
                            </li>
                            <li>
                                <strong>Wait for Processing</strong>
                                <p>Sisa will process the video and analyze the sign language content.</p>
                            </li>
                            <li>
                                <strong>View Translation</strong>
                                <p>Once processing is complete, the translation will appear in the result panel.</p>
                            </li>
                        </ol>

                        <h5>Supported Video Formats</h5>
                        <ul>
                            <li>MP4 (recommended)</li>
                            <li>MOV</li>
                            <li>AVI</li>
                            <li>WebM</li>
                        </ul>

                        <h5>Video Requirements</h5>
                        <ul>
                            <li>Maximum file size: 100MB</li>
                            <li>Maximum duration: 5 minutes</li>
                            <li>Recommended resolution: 720p or higher</li>
                        </ul>
                    </Card>
                </Tab>

                <Tab eventKey="setting" title={
                    <span>
                        <FaCog className='me-2' />
                        Setting
                    </span>
                }>
                    <Card body className='fade-up'>
                        <h4>Setting Guide</h4>
                        <p>Learn how to customize SiLa to your preferences</p>

                        <h5>Appearance Settings</h5>
                        <p>SiLa offers both light and dark themes. You can toggle between them using the theme switch in the top navigation bar.</p>

                        <h5>Language Settings</h5>
                        <p>You can customize which sign languages are supported in your translation:</p>
                        <ul>
                            <li>American Sign Language (ASL)</li>
                            <li>British Sign Language (BSL)</li>
                            <li>Australian Sign Language (Auslan)</li>
                            <li>And many more...</li>
                        </ul>

                        <h5>Account Settings</h5>
                        <p>Create an account to save your translation history and access your settings across devices.</p>

                        <h5>Privacy Settings</h5>
                        <p>Control how your data is used and stored:</p>
                        <ul>
                            <li>Choose whether to save translation history</li>
                            <li>Manage camera permissions</li>
                            <li>Control data sharing for service improvement</li>
                        </ul>
                    </Card>
                </Tab>
            </Tabs>
        </Container>
    </div>
  );
}

export default GuidePage