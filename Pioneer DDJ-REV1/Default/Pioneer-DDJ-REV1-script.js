

/*
    Pioneer-DDJ-REV1 mapping script file for Mixxx - Pioneer-DDJ-REV1-script.js
    Based on the Pioneer DDJ-REV1 script from mixxx, adapted by AKOI

    GPL license notice for current version:
    This program is free software; you can redistribute it and/or modify it under the terms of the
    GNU General Public License as published by the Free Software Foundation; either version 2
    of the License, or (at your option) any later version.

    This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;
    without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See
    the GNU General Public License for more details.

    You should have received a copy of the GNU General Public License along with this program; if
    not, write to the Free Software Foundation, Inc.,
    51 Franklin Street, Fifth Floor, Boston, MA  02110-1301, USA.


    MIT License for earlier versions:
    Permission is hereby granted, free of charge, to any person obtaining a copy of this software
    and associated documentation files (the "Software"), to deal in the Software without
    restriction, including without limitation the rights to use, copy, modify, merge, publish,
    distribute, sub-license, and/or sell copies of the Software, and to permit persons to whom the
    Software is furnished to do so, subject to the following conditions:

    The above copyright notice and this permission notice shall be included in all copies or
    substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING
    BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
    NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
    DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
// @ts-nocheck

// ****************************************************************************
// * Authors: Warker, nschloe, dj3730, jusko, tiesjan, Alexandr, 0b1, AKOI
// * Reviewers: Be-ing, Holzhaus
// * Manual: https://www.pioneerdj.com/en/support/documents/ddj-rev1/
// * Forum: https://mixxx.discourse.group/t/pioneer-ddj-rev1-mapping-update-2-6/32603/5
// * MIDI: https://www.pioneerdj.com/-/media/pioneerdj/software-info/controller/ddj-rev1/ddj-rev1_midi_message_list_e1.pdf
// * User Guide: https://manual.mixxx.org/2.6/en/hardware/controllers/pioneer_ddj_rev1
// ****************************************************************************
//
//  Implemented (as per manufacturer's manual):
//      * Mixer Section (Faders, EQ, Filter, Gain, Cue, Selector*)
//      * Browsing and loading*
//      * Vinyl/CDJ Mode*
//      * Jogwheels, Scratching, Bending, Loop adjust
//      * Cycle Temporange
//      * Beat Sync working all 4 decks
//      * Hot Cue Mode working all 4 decks
//      * Auto Loop Mode working all 4 decks
//      * Tracking Mode working all 4 decks
//      * Beat Jump Mode working all 4 decks
//      * Roll Mode working all 4 decks*
//      * Trans Mode working all 4 decks
//      * Vu Meter working all 4 decks* (Updated value from 150 to 120*)
//      * Sampler Mode working all 4 decks*
//      * Fader Start*
// 		* Level/Depth working for FX1/FX2* 
//      * Waveform Zoom*
//      * FX Lights*
//	    - Scratch Bank (Replaced with STEMS)(**MIXXX_2.6**)*
//      - Scractch Bank (Custom Config True)*
//
//  Custom (Mixxx specific mappings):
//      *Vinyl Mode: 
//                 - Starts in Vinyl mode. User configurable
//      * Sampler Mode(Pads 1-4): 
//	                  -Play/Pause
//					  		Pressed(while sample loaded): Play Sample 
//							Pressed(while sample empty): Load currently selected track
//							Pressed+Shift (while sample playing): Stop Sample
//							Pressed+Shift (while sample stopped): Eject Sample
//		* Beat Sync:
//					Sync Pressed: Beat Sync to Master deck
//					Sync Pressed+Shift: Lock Beat Sync ON
//      * Beat jump: 
//				    - Forward & back - Pads 1-2 
//					- Trigger jump size -  Pads 3-4 
//		* Auto Loop: 
//					- Pads 1-8 trigger an autoloop of variable sizes 
//		* Roll: 
//					- Holding pads 1-4 activates a loop roll of varying sizes. Release the pad to exit the Loop Roll
//		* Rewind: 
//				Play/Pause+SHIFT: Reverse playback in Slip Mode while held (Censor)
//		* Effects:
//				-LEVEL/DEPTH knob:
//					Adjusts the parameter of the enabled effects of FX1/FX2
//				-SHIFT+FX1: 
//					Cycle to the next EffectChain preset after the currently loaded preset. (Descending) 
//				-SHIFT+FX2: 
//					Adjust the average BPM up by +0.01 - The beatgrid lines move closer to each other
//				-SHIFT+FX3: 
//					Adjust the average BPM down by -0.01 - The beatgrid lines move further apart from each other
//              -FX{N}_{N} + Rotary Selector:
//                  Designate effect for selected FX button. (Descending) 
//          
//		* CUE HEADPHONES: 
//      				-Toggle quantize:
//							Press Once:  CUE Headphones+SHIFT
//						-BPM Adjust:
//							Repeatedly Press: CUE Headphones+SHIFT - press - Adjust BPM to match tapped BPM 
//      * CrossFader Start: 
//                      - Shift + Crossfader: All the way left or right. See manual
//                      - To disable: Utilities Mode Pad 3 is lit: Fader Start is turned off
//                      - Limitation: - Playing deck is always opposite of starting deck irrespective of active opposite deck
//                                    - Controller only sends 0x52 despite Utilities mode settings Sync(0x51) and Non-Sync(0x66)  
//      * Channel Fader Start:
//                      - Shift + UP or Down of opposite Channel Fader: All the way down or up.  Varies from manual. 
//                      - To disable: Utilities Mode Pad 3 is lit: Fader Start is turned off. (MIXXX RESTART may be required)
//                      - Limitation: - Playing deck is always opposite of starting deck irrespective of active opposite deck
//                                    - Controller only sends 0x52 despite Utilities mode settings Sync(0x51) and Non-Sync(0x66)  
//		* Library Sort: 
//      				-Deck 1: Sorts by BPM:
//							Press SHIFT + LOAD Deck 1
//						-Deck 2: Sorts by artist names:
//							Press SHIFT + LOAD Deck 2 
//      				-Deck 3: Sorts by date added:
//							Press SHIFT + LOAD Deck 3
//						-Deck 4: Sorts by key:
//							Press SHIFT + LOAD Deck 4 
//		* Bonus:
//				- Fixed Tempo Sliders:
//					Tempo Sliders now aligned with REV1 Deck

//				-Scratch Bank/STEMS (All Decks):
//					Pad 1: STEM VOICE Mute
//					Pad 2: STEM MELODY Mute
//					Pad 3: STEM BASS Mute 
//					Pad 4: STEM DRUM Mute
//				    Pad 5: STEM Voice Effect  
//                  Pad 6: STEM MELODY Effect 
//                  Pad 7: STEM BASS Effect 
//                  Pad 8: STEM DRUM Effect   
//             
//					Pad 1 + SHIFT: AutoDJ
//					Pad 2 + SHIFT: AutoDJ Fade to Next
//					Pad 3 + SHIFT: Toggle Microphone
//					Pad 4 + SHIFT: Record Mix
//					Pad 5 + SHIFT: Key Match 
//					Pad 6 + SHIFT: Beat Grid
//					Pad 7 + SHIFT: Pitch UP
//					Pad 8 + SHIFT: Pitch Down
//
///					Pad 1 + Level/Depth: STEM VOICE Volume
//					Pad 2 + Level/Depth: STEM MELODY Volume
//					Pad 3 + Level/Depth: STEM BASS Volume
//					Pad 4 + Level/Depth: STEM DRUM Volume
///					Pad 5 + Level/Depth: STEM EFFECT Volume 
//					Pad 6 + Level/Depth: STEM EFFECT Volume
//					Pad 7 + Level/Depth: STEM EFFECT Volume 
//					Pad 8 + Level/Depth: STEM EFFECT Volume
//              -Stem Lights behavior:
//                  - Stem pads lights and Mixxx skin will light on load(button) of STEM file, off on Load of non STEM file
//              
//              -Sampler Volume (All Decks): 
//					-Sampler + Level/Depth: Sets Samplers 1-8 Gain levels
//                  -Configurable show sample skin when enabled
//              -Waveform zoom (All Decks):
//                  -If configuration enabled, Vinyl mode pitch bend is disabled and jog wheel side controls waveform zoom. CDJ mode unchanged
//      
//
//
//			*****Not Supported*****
// 				-	
//					
var PioneerDDJREV1 = {};



/////////////////////////************/////////////////////////////////
//                       USER OPTIONS                              //
/////////////////////////***********////////////////////////////////
// If true DECK{N} start in Vinyl Mode, if false DECK{N} start in CDJ Mode. 
PioneerDDJREV1.vinylMode = [true, true, true, true];

// If true, the vinyl button activates slip. 
PioneerDDJREV1.VinylSlipButton = false;

// If true, the vinyl button activates slip and turns off with no contact. 
PioneerDDJREV1.VinylSlipAutoff = false;

// If true, the sampler skin is shown while adjusting sampler volume. 
PioneerDDJREV1.tempSamplerSkin = true;

//If true, vinyl pitch bend controls waveform zoom. CDJ mode remians unchanged.
PioneerDDJREV1.sZoom = false;

//To disable Fader Start(s)p enter "Utilities Mode". Press Performance Pads 3 on the left deck. Fader Start is turned off.

//Reactivate previous FX lights system
//PioneerDDJREV1.oldFXLights = false;

//If true, Scratch Bank enabled
PioneerDDJREV1.scratchBankEnabled = false;
////////////////////////*************/////////////////////////////////
//                       USER OPTIONS                              //
////////////////////////************////////////////////////////////




PioneerDDJREV1.lights = {
    beatFx: {
        status: 0x94,
        data1: 0x47,
    },
    shiftBeatFx: {
        status: 0x94,
        data1: 0x43,
    },
    deck1: {
        vuMeter: {
            status: 0xB0,
            data1: 0x02,
        },
        playPause: {
            status: 0x90,
            data1: 0x0B,
        },
        shiftPlayPause: {
            status: 0x90,
            data1: 0x47,
        },
        cue: {
            status: 0x90,
            data1: 0x0C,
        },
        shiftCue: {
            status: 0x90,
            data1: 0x48,
        },
    },
    deck2: {
        vuMeter: {
            status: 0xB1,
            data1: 0x02,
        },
        playPause: {
            status: 0x91,
            data1: 0x0B,
        },
        shiftPlayPause: {
            status: 0x91,
            data1: 0x47,
        },
        cue: {
            status: 0x91,
            data1: 0x0C,
        },
        shiftCue: {
            status: 0x91,
            data1: 0x48,
        },
    },
    deck3: {
        vuMeter: {
            status: 0xB2,
            data1: 0x02,
        },
        playPause: {
            status: 0x92,
            data1: 0x0B,
        },
        shiftPlayPause: {
            status: 0x92,
            data1: 0x47,
        },
        cue: {
            status: 0x92,
            data1: 0x0C,
        },
        shiftCue: {
            status: 0x92,
            data1: 0x48,
        },
    },
    deck4: {
        vuMeter: {
            status: 0xB3,
            data1: 0x02,
        },
        playPause: {
            status: 0x93,
            data1: 0x0B,
        },
        shiftPlayPause: {
            status: 0x93,
            data1: 0x47,
        },
        cue: {
            status: 0x93,
            data1: 0x0C,
        },
        shiftCue: {
            status: 0x93,
            data1: 0x48,
        },
    },
};

PioneerDDJREV1.lastCrossFader = 0;  // Last value of the cross fader
PioneerDDJREV1.lastFader = [0, 0];   // Last value of each channel fader

PioneerDDJREV1.lastStemChannel = null;

// Store timer IDs
PioneerDDJREV1.timers = {};

// Store cue points
PioneerDDJREV1.tempCuePoint = null;

// Jog wheel constants
PioneerDDJREV1.alpha = 1.0 / 8;
PioneerDDJREV1.beta = PioneerDDJREV1.alpha / 32;

// Multiplier for fast seek through track using SHIFT+JOGWHEEL
PioneerDDJREV1.fastSeekScale = 50;
PioneerDDJREV1.bendScale = 0.8;

PioneerDDJREV1.tempoRanges = [0.06, 0.10, 0.16, 0.25];

PioneerDDJREV1.shiftButtonDown = [false, false];


// Object to store the tempo slider for each deck
PioneerDDJREV1.highResMSB = {
    "[Channel1]": { deckFader: 0 },
    "[Channel2]": { deckFader: 0 },
    "[Channel3]": { deckFader: 0 },
    "[Channel4]": { deckFader: 0 }
};

// Jog wheel loop adjust
PioneerDDJREV1.loopAdjustIn = [false, false];
PioneerDDJREV1.loopAdjustOut = [false, false];
PioneerDDJREV1.loopAdjustMultiply = 10;

// Beatjump pad (beatjump_size values)
PioneerDDJREV1.beatjumpSizeForPad = {
    0x20: -1, // PAD 1
    0x21: 1,  // PAD 2
    0x22: -2, // PAD 3
    0x23: 2,  // PAD 4
    0x24: -4, // PAD 5
    0x25: 4,  // PAD 6
    0x26: -8, // PAD 7
    0x27: 8   // PAD 8
};

PioneerDDJREV1.quickJumpSize = 32;


PioneerDDJREV1.shiftPressed = false;
PioneerDDJREV1.syncButtonPressed = false;
PioneerDDJREV1.stemShiftPressed = false;
PioneerDDJREV1.stemEffectPressed = false;
PioneerDDJREV1.sampleShiftPressed = false;
PioneerDDJREV1.samplerChannel = 0;
PioneerDDJREV1.wave = 5;
let currentStemMute
let currentStemEffect


//
// Init
//

PioneerDDJREV1.init = function () {
    engine.setValue("[EffectRack1_EffectUnit1]", "show_focus", 1);
    engine.setValue("[EffectRack1_EffectUnit2]", "show_focus", 1);

    engine.makeUnbufferedConnection("[Channel1]", "vu_meter", PioneerDDJREV1.vuMeterUpdate);
    engine.makeUnbufferedConnection("[Channel2]", "vu_meter", PioneerDDJREV1.vuMeterUpdate);
    engine.makeUnbufferedConnection("[Channel3]", "vu_meter", PioneerDDJREV1.vuMeterUpdate);
    engine.makeUnbufferedConnection("[Channel4]", "vu_meter", PioneerDDJREV1.vuMeterUpdate);

    PioneerDDJREV1.toggleLight(PioneerDDJREV1.lights.deck1.vuMeter, false);
    PioneerDDJREV1.toggleLight(PioneerDDJREV1.lights.deck2.vuMeter, false);
    PioneerDDJREV1.toggleLight(PioneerDDJREV1.lights.deck3.vuMeter, false);
    PioneerDDJREV1.toggleLight(PioneerDDJREV1.lights.deck4.vuMeter, false);

    engine.softTakeover("[Channel1]", "rate", true);
    engine.softTakeover("[Channel2]", "rate", true);
    engine.softTakeover("[Channel3]", "rate", true);
    engine.softTakeover("[Channel4]", "rate", true);
    engine.softTakeover("[EffectRack1_EffectUnit1_Effect1]", "meta", true);
    engine.softTakeover("[EffectRack1_EffectUnit1_Effect2]", "meta", true);
    engine.softTakeover("[EffectRack1_EffectUnit1_Effect3]", "meta", true);
    engine.softTakeover("[EffectRack1_EffectUnit1]", "mix", true);

    engine.softTakeover("[EffectRack1_EffectUnit2_Effect1]", "meta", true);
    engine.softTakeover("[EffectRack1_EffectUnit2_Effect2]", "meta", true);
    engine.softTakeover("[EffectRack1_EffectUnit2_Effect3]", "meta", true);
    engine.softTakeover("[EffectRack1_EffectUnit2]", "mix", true);


    const samplerCount = 16;
    if (engine.getValue("[App]", "num_samplers") < samplerCount) {
        engine.setValue("[App]", "num_samplers", samplerCount);
    }
    for (let i = 1; i <= samplerCount; ++i) {
        engine.makeConnection("[Sampler" + i + "]", "play", PioneerDDJREV1.samplerPlayOutputCallbackFunction);
    }

    engine.makeConnection("[Channel1]", "track_loaded", PioneerDDJREV1.trackLoadedLED);
    engine.makeConnection("[Channel2]", "track_loaded", PioneerDDJREV1.trackLoadedLED);
    engine.makeConnection("[Channel3]", "track_loaded", PioneerDDJREV1.trackLoadedLED);
    engine.makeConnection("[Channel4]", "track_loaded", PioneerDDJREV1.trackLoadedLED);

    // play the "track loaded" animation on both decks at startup

    midi.sendShortMsg(0x9F, 0x00, 0x7F);

    midi.sendShortMsg(0x9F, 0x01, 0x7F);

    PioneerDDJREV1.setLoopButtonLights(0x90, 0x7F);
    PioneerDDJREV1.setLoopButtonLights(0x91, 0x7F);

    engine.makeConnection("[Channel1]", "loop_enabled", PioneerDDJREV1.loopToggle);
    engine.makeConnection("[Channel2]", "loop_enabled", PioneerDDJREV1.loopToggle);
    engine.makeConnection("[Channel3]", "loop_enabled", PioneerDDJREV1.loopToggle);
    engine.makeConnection("[Channel4]", "loop_enabled", PioneerDDJREV1.loopToggle);

    // Faders
    engine.makeConnection("[Master]", "crossfader", PioneerDDJREV1.crossFaderStart);

    //Init Reset FX
    for (let i = 1; i <= 3; i++) {
    engine.setValue("[EffectRack1_EffectUnit1_Effect" + i + "]", "enabled", 0);
    midi.sendShortMsg(0x94, 0x70 + (i-1), 0x00);
}
for (let i = 1; i <= 3; i++) {
    engine.setValue("[EffectRack1_EffectUnit2_Effect" + i + "]", "enabled", 0);
    midi.sendShortMsg(0x95, 0x70 + (i-1), 0x00);
}


    // Effects connections
for (let i = 1; i <= 3; i++) {
    engine.makeConnection("[EffectRack1_EffectUnit1_Effect" + i + "]", "enabled", PioneerDDJREV1.fxUpdate);
}
for (let i = 1; i <= 3; i++) {
    engine.makeConnection("[EffectRack1_EffectUnit2_Effect" + i + "]", "enabled", PioneerDDJREV1.fxUpdate);
}
 


    // query the controller for current control positions on startup
    midi.sendSysexMsg([0xF0, 0x00, 0x40, 0x05, 0x00, 0x00, 0x02, 0x06, 0x00, 0x03, 0x01, 0xf7], 12);

};

//f
// Channel level lights
//

PioneerDDJREV1.vuMeterUpdate = function (value, group) {
    const newVal = value * 120;

    switch (group) {
        case "[Channel1]":
            midi.sendShortMsg(0xB0, 0x02, newVal);
            break;
        case "[Channel2]":
            midi.sendShortMsg(0xB1, 0x02, newVal);
            break;
        case "[Channel3]":
            midi.sendShortMsg(0xB2, 0x02, newVal);
            break;
        case "[Channel4]":
            midi.sendShortMsg(0xB3, 0x02, newVal);
            break;
    }
};
PioneerDDJREV1.fxUpdate = function (value, group) {
  /*   // This prevents feedback loops when we're sending MIDI messages to update the controller
    if (PioneerDDJREV1.controllerInControl) {
        return;
    } */
    
    let newState = (value === 1);
    let midiValue = newState ? 0x7F : 0x00;

    // Update our internal state tracking and controller lights
    if (group.startsWith("[EffectRack1_EffectUnit1")) { // Effects Group 1 Mixxx Sync
        let effectNum = parseInt(group.match(/Effect(\d+)\]/)[1]);
        PioneerDDJREV1.effectStates.FX1[effectNum - 1] = newState;
        midi.sendShortMsg(0x94, 0x6F + effectNum, midiValue); // Channel 5
    } else if (group.startsWith("[EffectRack1_EffectUnit2")) { // Effects Group 2 Mixxx Sync
        let effectNum = parseInt(group.match(/Effect(\d+)\]/)[1]);
        PioneerDDJREV1.effectStates.FX2[effectNum - 1] = newState;
        midi.sendShortMsg(0x95, 0x6F + effectNum, midiValue); // Channel 6
    }
};
PioneerDDJREV1.trackLoadedLED = function (value, group, _control) {
    midi.sendShortMsg(
        0x9F,
        group.match(script.channelRegEx)[1] - 1,
        value > 0 ? 0x7F : 0x00
    );
};

PioneerDDJREV1.toggleLight = function (midiIn, active) {
    midi.sendShortMsg(midiIn.status, midiIn.data1, active ? 0x7F : 0x00);
};

//
// Loop IN/OUT ADJUST
//

PioneerDDJREV1.toggleLoopAdjustIn = function (channel, _control, value, _status, group) {
    if (value === 0 || engine.getValue(group, "loop_enabled") === 0) {
        return;
    }
    PioneerDDJREV1.loopAdjustIn[channel] = !PioneerDDJREV1.loopAdjustIn[channel];
    PioneerDDJREV1.loopAdjustOut[channel] = false;
};

PioneerDDJREV1.toggleLoopAdjustOut = function (channel, _control, value, _status, group) {
    if (value === 0 || engine.getValue(group, "loop_enabled") === 0) {
        return;
    }
    PioneerDDJREV1.loopAdjustOut[channel] = !PioneerDDJREV1.loopAdjustOut[channel];
    PioneerDDJREV1.loopAdjustIn[channel] = false;
};

// Two signals are sent here so that the light stays lit/unlit in its shift state too
PioneerDDJREV1.setReloopLight = function (_channel, _control, value, status, _group) {
    midi.sendShortMsg(status, 0x4D, value);
    midi.sendShortMsg(status, 0x50, value);
};

PioneerDDJREV1.setLoopButtonLights = function (_channel, _control, value, status, _group) {
    [0x10, 0x11, 0x4E, 0x4C].forEach(function (control) {
        midi.sendShortMsg(status, control, value);
    });
};

PioneerDDJREV1.startLoopLightsBlink = function (channel, control, _value, status, group) {
    let blink = 0x7F;

    PioneerDDJREV1.stopLoopLightsBlink(group, control, status);

    PioneerDDJREV1.timers[group][control] = engine.beginTimer(500, () => {
        blink = 0x7F - blink;

        // When adjusting the loop out position, turn the loop in light off
        if (PioneerDDJREV1.loopAdjustOut[channel]) {
            midi.sendShortMsg(status, 0x10, 0x00);
            midi.sendShortMsg(status, 0x4C, 0x00);
        } else {
            midi.sendShortMsg(status, 0x10, blink);
            midi.sendShortMsg(status, 0x4C, blink);
        }

        // When adjusting the loop in position, turn the loop out light off
        if (PioneerDDJREV1.loopAdjustIn[channel]) {
            midi.sendShortMsg(status, 0x11, 0x00);
            midi.sendShortMsg(status, 0x4E, 0x00);
        } else {
            midi.sendShortMsg(status, 0x11, blink);
            midi.sendShortMsg(status, 0x4E, blink);
        }
    });
};

PioneerDDJREV1.stopLoopLightsBlink = function (_channel, control, _value, status, group) {
    PioneerDDJREV1.timers[group] = PioneerDDJREV1.timers[group] || {};

    if (PioneerDDJREV1.timers[group][control] !== undefined) {
        engine.stopTimer(PioneerDDJREV1.timers[group][control]);
    }
    PioneerDDJREV1.timers[group][control] = undefined;
    PioneerDDJREV1.setLoopButtonLights(status, 0x7F);
};

PioneerDDJREV1.loopToggle = function (_channel, control, value, _status, group) {
    const status = group === "[Channel1]" ? 0x90 : 0x91,
        channel = group === "[Channel1]" ? 0 : 1;

    PioneerDDJREV1.setReloopLight(status, value ? 0x7F : 0x00);

    if (value) {
        PioneerDDJREV1.startLoopLightsBlink(channel, control, status, group);
    } else {
        PioneerDDJREV1.stopLoopLightsBlink(group, control, status);
        PioneerDDJREV1.loopAdjustIn[channel] = false;
        PioneerDDJREV1.loopAdjustOut[channel] = false;
    }
};
//////////////////////////////////////////////////////////////////////
//Effects Buffering
/////////////////////////////////////////////////////////////////////////
// Button press buffering system to detect single, double, and triple presses
// This resolves the issue by delaying action execution until all rapid presses are captured

PioneerDDJREV1.buttonPressBuffer = {}; // Stores pending button presses
PioneerDDJREV1.buttonTimeouts = {};    // Stores setTimeout references for each button group

PioneerDDJREV1.bufferButtonPress = function (fxGroup, buttonIndex, mixxxUnit) {
    // Initialize buffer for this fxGroup if it doesn't exist
    if (!PioneerDDJREV1.buttonPressBuffer[fxGroup]) {
        PioneerDDJREV1.buttonPressBuffer[fxGroup] = [];
    }
    
    // Add current button press to buffer
    PioneerDDJREV1.buttonPressBuffer[fxGroup].push(buttonIndex);
    
    // Clear any existing timeout for this group
    if (PioneerDDJREV1.buttonTimeouts[fxGroup]) {
        engine.stopTimer(PioneerDDJREV1.buttonTimeouts[fxGroup]);
    }
    
    // Set new timeout to process the buffered presses after 50ms
    PioneerDDJREV1.buttonTimeouts[fxGroup] = engine.beginTimer(50, function() {
        PioneerDDJREV1.processBufferedPresses(fxGroup, mixxxUnit);
    }, true);
};


PioneerDDJREV1.processBufferedPresses = function(fxGroup, mixxxUnit) {
    const presses = PioneerDDJREV1.buttonPressBuffer[fxGroup] || [];
    const pressedButtons = [...new Set(presses)]; // Remove duplicates
    const uniquePressCount = pressedButtons.length;
    
    if (uniquePressCount === 1) {
        PioneerDDJREV1.handleSinglePress(fxGroup, pressedButtons[0], mixxxUnit);
    } else if (uniquePressCount === 2) {
        PioneerDDJREV1.handleDoublePress(fxGroup, pressedButtons, mixxxUnit);
    } else if (uniquePressCount >= 3) {
        PioneerDDJREV1.handleTriplePress(fxGroup, mixxxUnit);
    }
    
    // Clear the buffer for this group
    PioneerDDJREV1.buttonPressBuffer[fxGroup] = [];
    delete PioneerDDJREV1.buttonTimeouts[fxGroup];
};

// Handle when single button in a group are pressed
PioneerDDJREV1.handleSinglePress = function (fxGroup, buttonIndex, mixxxUnit) {
    // When a single button is pressed, we enable that effect and disable others
    for (var i = 0; i < 3; i++) {
        PioneerDDJREV1.effectStates[fxGroup][i] = (i === buttonIndex);
    }
    PioneerDDJREV1.syncSingleEffect(fxGroup, buttonIndex, mixxxUnit);
};
// Handle when dual button in a group are pressed
PioneerDDJREV1.handleDoublePress = function (fxGroup, buttonIndices, mixxxUnit) {
    // When two buttons are pressed, enable those two and disable the third
    for (var i = 0; i < 3; i++) {
        PioneerDDJREV1.effectStates[fxGroup][i] = buttonIndices.includes(i);
    }
    PioneerDDJREV1.syncDualEffects(fxGroup, mixxxUnit, buttonIndices);
};

PioneerDDJREV1.handleTriplePress = function (fxGroup, mixxxUnit) {
    // When all three buttons are pressed, enable all effects
    PioneerDDJREV1.effectStates[fxGroup].fill(true);
    PioneerDDJREV1.syncAllEffects(mixxxUnit);
};

/* PioneerDDJREV1.handleNoPress = function(fxGroup, mixxxUnit) {
    // When all buttons are released, disable all effects
    PioneerDDJREV1.effectStates[fxGroup].fill(false);
    PioneerDDJREV1.syncNoEffects(mixxxUnit);
}; */
//////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////
//
// CUE/LOOP CALL
//

PioneerDDJREV1.cueLoopCallLeft = function (_channel, _control, value, _status, group) {
    if (value) {
        engine.setValue(group, "loop_scale", 0.5);
    }
};

PioneerDDJREV1.cueLoopCallRight = function (_channel, _control, value, _status, group) {
    if (value) {
        engine.setValue(group, "loop_scale", 2.0);
    }
};

//
// BEAT SYNC
//
// Note that the controller sends different signals for a short press and a long
// press of the same button. REV1 Does not have long press allocated for SYNC only DECK Select. 
//

PioneerDDJREV1.syncPressed = function (_channel, _control, value, _status, group) {
    PioneerDDJREV1.syncButtonPressed = !PioneerDDJREV1.syncButtonPressed;

    if (engine.getValue(group, "sync_enabled") && value > 0) {
        engine.setValue(group, "sync_enabled", 0);
    } else {
        engine.setValue(group, "beatsync", value);
    }
};

PioneerDDJREV1.syncLongPressed = function (_channel, _control, value, _status, group) {
    if (value) {
        engine.setValue(group, "sync_enabled", 1);
    }
};

PioneerDDJREV1.cycleTempoRange = function (_channel, _control, value, _status, group) {
    if (value === 0) { return; } // ignore release

    const currRange = engine.getValue(group, "rateRange");
    let idx = 0;

    for (let i = 0; i < this.tempoRanges.length; i++) {
        if (currRange === this.tempoRanges[i]) {
            idx = (i + 1) % this.tempoRanges.length;
            break;
        }
    }
    engine.setValue(group, "rateRange", this.tempoRanges[idx]);
};

//
// Jog wheels
//

PioneerDDJREV1.jogTurn = function (channel, _control, value, _status, group) {
    const deckNum = channel + 1;
    // wheel center at 64; <64 rew >64 fwd
    let newVal = value - 64;

    if (engine.isScratching(deckNum)) {
        engine.scratchTick(deckNum, newVal);
    } else { // fallback
        trackLoaded = engine.getValue(group, "track_loaded"); //Prevent off deck zoom
        if (PioneerDDJREV1.sZoom && PioneerDDJREV1.vinylMode[channel] && trackLoaded) { //Waveform enabled only for vinyl mode      
            if (value === 63) {
                PioneerDDJREV1.wave = PioneerDDJREV1.wave + .1;
                engine.setValue(group, "waveform_zoom", PioneerDDJREV1.wave);
            }
            else if (value === 65) {
                PioneerDDJREV1.wave = PioneerDDJREV1.wave - .1;
                engine.setValue(group, "waveform_zoom", PioneerDDJREV1.wave);
            }
        } else {
            engine.setValue(group, "jog", newVal * this.bendScale);
        }
    }
};

// Function to handle jog wheel search
PioneerDDJREV1.jogSearch = function (channel, _control, value, _status, group) {
    const deckNum = channel + 1;

    let newVal = value - 64;

    // loop_in / out adjust
    const loopEnabled = engine.getValue(group, "loop_enabled");
    if (loopEnabled > 0) {
        if (PioneerDDJREV1.loopAdjustIn[channel]) {
            newVal = newVal * PioneerDDJREV1.loopAdjustMultiply + engine.getValue(group, "loop_start_position");
            engine.setValue(group, "loop_start_position", newVal);
            return;
        }
        if (PioneerDDJREV1.loopAdjustOut[channel]) {
            newVal = newVal * PioneerDDJREV1.loopAdjustMultiply + engine.getValue(group, "loop_end_position");
            engine.setValue(group, "loop_end_position", newVal);
            return;
        }
    }
    newVal = newVal * PioneerDDJREV1.fastSeekScale;
    if (engine.isScratching(deckNum)) {
        engine.scratchTick(deckNum, newVal);
    } else { // fallback
        engine.setValue(group, "jog", newVal * this.bendScale);
    }
};

// Function to handle jog wheel touch
PioneerDDJREV1.jogTouch = function (channel, _control, value, _status, group) {
    const deckNum = channel + 1;

    if (PioneerDDJREV1.VinylSlipAutoff) {
        engine.setValue(group, "slip_enabled", 1);
    }

    // skip while adjusting the loop points
    if (PioneerDDJREV1.loopAdjustIn[channel] || PioneerDDJREV1.loopAdjustOut[channel]) {
        return;
    }

    if (value !== 0 && PioneerDDJREV1.vinylMode[channel]) {
        engine.scratchEnable(deckNum, 720, 33 + 1 / 3, this.alpha, this.beta);
    } else {
        engine.scratchDisable(deckNum);
        if (PioneerDDJREV1.VinylSlipAutoff) {
            engine.setValue(group, "slip_enabled", 0);
        }
    }
};

// Function to toggle vinyl mode for a specific deck
PioneerDDJREV1.toggleVinylMode = function (channel, _control, value, _status, group) {
    if (value > 0) { // Check if the button was pressed
        PioneerDDJREV1.vinylMode[channel] = !PioneerDDJREV1.vinylMode[channel]; // Toggle the mode for the specific deck
        if (PioneerDDJREV1.VinylSlipButton && PioneerDDJREV1.vinylMode[channel]) {
            engine.setValue(group, "slip_enabled", 1);
        }
    }
};
//
// Shift button
//


PioneerDDJREV1.shiftButton = function (_channel, _control, _value, _status, _group) {
    // Note that there is no 'if (value === 127)' here so this executes both when the shift button is pressed and when it is released.
    // Therefore, MyController.shift will only be true while the shift button is held down
    PioneerDDJREV1.shiftPressed = !PioneerDDJREV1.shiftPressed; // '!' inverts a boolean (true/false) value 
};

//
// Tempo sliders
//
// The tempo option in deck preferences determine whether down/up
// increases/decreases the rate. Therefore it must be inverted here so that the
// UI and the control sliders always move in the same direction.
PioneerDDJREV1.tempoSliderMSB = function (_channel, _control, value, _status, _group) {
    PioneerDDJREV1.highResMSB[group].tempoSlider = value;
};

PioneerDDJREV1.tempoSliderLSB = function (_channel, _control, value, _status, group) {
    const fullValue = (PioneerDDJREV1.highResMSB[group].tempoSlider << 7) + value;

    engine.setValue(
        group,
        "rate",
        1 - (fullValue / 0x2000)
    );
};

//
// Beat Jump mode
//
// Note that when we increase/decrease the sizes on the pad buttons, we use the
// value of the first pad (0x21) as an upper/lower limit beyond which we don't
// allow further increasing/decreasing of all the values.
//

PioneerDDJREV1.beatjumpPadPressed = function (_channel, control, value, _status, group) {
    if (value === 0) {
        return;
    }
    engine.setValue(group, "beatjump_size", Math.abs(PioneerDDJREV1.beatjumpSizeForPad[control]));
    engine.setValue(group, "beatjump", PioneerDDJREV1.beatjumpSizeForPad[control]);
};


PioneerDDJREV1.increaseBeatjumpSizes = function (_channel, control, value, _status, group) {
    if (value === 0 || PioneerDDJREV1.beatjumpSizeForPad[0x21] * 16 > 16) {
        return;
    }
    Object.keys(PioneerDDJREV1.beatjumpSizeForPad).forEach(function (pad) {
        PioneerDDJREV1.beatjumpSizeForPad[pad] = PioneerDDJREV1.beatjumpSizeForPad[pad] * 16;
    });
    engine.setValue(group, "beatjump_size", PioneerDDJREV1.beatjumpSizeForPad[0x21]);
};


PioneerDDJREV1.decreaseBeatjumpSizes = function (_channel, control, value, _status, group) {
    if (value === 0 || PioneerDDJREV1.beatjumpSizeForPad[0x21] / 16 < 1 / 16) {
        return;
    }
    Object.keys(PioneerDDJREV1.beatjumpSizeForPad).forEach(function (pad) {
        PioneerDDJREV1.beatjumpSizeForPad[pad] = PioneerDDJREV1.beatjumpSizeForPad[pad] / 16;
    });
    engine.setValue(group, "beatjump_size", PioneerDDJREV1.beatjumpSizeForPad[0x21]);
};

//
// Sampler mode
//

PioneerDDJREV1.samplerPlayOutputCallbackFunction = function (value, group, _control) {
    if (value !== 1) return;

    // Extract the current pad number from the group string using regex
    const curPad = parseInt(group.match(script.samplerRegEx)[1], 10);

    // Define channel-specific configurations
    const channelConfigs = {
        7: { minPad: 1, maxPad: 4, baseChannel: 0x97, baseNote: 0x30 },
        9: { minPad: 5, maxPad: 8, baseChannel: 0x99, baseNote: 0x30 },
        11: { minPad: 1, maxPad: 4, baseChannel: 0x9B, baseNote: 0x30 },
        13: { minPad: 5, maxPad: 8, baseChannel: 0x9D, baseNote: 0x30 }
    };

    // Get the configuration for the current sampler channel
    const config = channelConfigs[PioneerDDJREV1.samplerChannel];

    // Check if the current pad is within the valid range for the channel
    if (config && curPad >= config.minPad && curPad <= config.maxPad) {


        // Calculate and start the sampler blink
        PioneerDDJREV1.startSamplerBlink(
            config.baseChannel + (curPad > 8 ? 2 : 0),
            config.baseNote + ((curPad > 8 ? curPad - 8 : curPad) - config.minPad),
            group
        );
    }
};


PioneerDDJREV1.samplerPadPressed = function (channel, _control, value, _status, group) {
    PioneerDDJREV1.samplerChannel = channel;

    if (engine.getValue(group, "track_loaded")) {
        engine.setValue(group, "cue_gotoandplay", value);
    } else {
        engine.setValue(group, "LoadSelectedTrack", value);
    }
};

PioneerDDJREV1.samplerPadShiftPressed = function (_channel, _control, value, _status, group) {
    if (engine.getValue(group, "play")) {
        engine.setValue(group, "cue_gotoandstop", value);
    } else if (engine.getValue(group, "track_loaded")) {
        engine.setValue(group, "eject", value);

    }
};

PioneerDDJREV1.startSamplerBlink = function (channel, control, group) {
    let val = 0x7f;

    PioneerDDJREV1.stopSamplerBlink(channel, control);
    PioneerDDJREV1.timers[channel][control] = engine.beginTimer(250, () => {
        val = 0x7f - val;

        // blink the appropriate pad
        midi.sendShortMsg(channel, control, val);
        // also blink the pad while SHIFT is pressed
        midi.sendShortMsg((channel + 1), control, val);

        const isPlaying = engine.getValue(group, "play") === 1;

        if (!isPlaying) {
            // kill timer
            PioneerDDJREV1.stopSamplerBlink(channel, control);
            // set the pad LED to ON
            midi.sendShortMsg(channel, control, 0x7f);
            // set the pad LED to ON while SHIFT is pressed
            midi.sendShortMsg((channel + 1), control, 0x7f);
        }
    });
};

PioneerDDJREV1.stopSamplerBlink = function (channel, control, _value, _status, _group) {
    PioneerDDJREV1.timers[channel] = PioneerDDJREV1.timers[channel] || {};

    if (PioneerDDJREV1.timers[channel][control] !== undefined) {
        engine.stopTimer(PioneerDDJREV1.timers[channel][control]);
        PioneerDDJREV1.timers[channel][control] = undefined;
    }
};

//
// Additional features
//

PioneerDDJREV1.toggleQuantize = function (_channel, _control, value, _status, group) {
    if (value) {
        script.toggleControl(group, "quantize");
    }
};

PioneerDDJREV1.quickJumpForward = function (_channel, _control, value, _status, group) {
    if (value) {
        engine.setValue(group, "beatjump", PioneerDDJREV1.quickJumpSize);
    }
};

PioneerDDJREV1.quickJumpBack = function (_channel, _control, value, _status, group) {
    if (value) {
        engine.setValue(group, "beatjump", -PioneerDDJREV1.quickJumpSize);
    }
};

//Load Selected Track and Sync Stem Lights 
PioneerDDJREV1.loadSelectedTrack = function (_channel, _control, value, _status, group) {
    engine.setValue(group, "LoadSelectedTrack", value); //Normal Function Load Track

    //Load or Unload STEMS
    let stemCount = engine.getValue(group, "stem_count"); //Get Stem count
    const baseNote = 0x70; // Starting MIDI note for stems
    const groupPrefix = "[QuickEffectRack1_" + "[Channel" + script.deckFromGroup(group) + "_Stem"; //Stems Effects Channel
    const stemMuteGroupPrefix = "[Channel" + script.deckFromGroup(group) + "_Stem";               //Stems Channel

    for (let i = 1; i <= 4; i++) {
        const stemEffectGroup = `${groupPrefix}${i}]]`;
        const stemMuteGroup = `${stemMuteGroupPrefix}${i}]`;

        for (let n = 1; n <= 8; n++) {
            const note = baseNote + (8 - n); // Calculate MIDI note for each stem    
            if (stemCount > 0) {
                midi.sendShortMsg(0x97, note, 0x7F); // Note on
                //Sync Mixx Lights
                engine.setValue(stemEffectGroup, "enabled", 1);
                engine.setValue(stemMuteGroup, "mute", 0);
            } else {
                midi.sendShortMsg(0x97, note, 0x00); // Note off
                //Sync Mixx Lights
                engine.setValue(stemEffectGroup, "enabled", 0);
                engine.setValue(stemMuteGroup, "mute", 1);
            }
        }
    }
};

//Cue Shift Manufacture Default
PioneerDDJREV1.cueShift = function (_channel, _control, value, _status, group) {
    if (engine.getValue(group, "play")) {
        engine.setValue(group, "start_stop", value);
    } else if (engine.getValue(group, "track_loaded")) {
        engine.setValue(group, "eject", value);
        engine.setValue(group, "eject", value);
    }

};
//Sort Library
PioneerDDJREV1.librarySort = function (channel, control, value, status, group) {
    engine.setValue("[Library]", "sort_order", 1); //Sort Descending 
    switch (group) {
        case "[Channel1]":
            engine.setValue("[Library]", "sort_column_toggle", 15); // Sort by BPM
            break;
        case "[Channel2]":
            engine.setValue("[Library]", "sort_column_toggle", 1); // Sort by Artist
            break;
        case "[Channel3]":
            engine.setValue("[Library]", "sort_order", 0); //Sort Ascensding 
            engine.setValue("[Library]", "sort_column_toggle", 17); // Sort by Datetime Added
            break;
        case "[Channel4]":
            engine.setValue("[Library]", "sort_column_toggle", 20); // Sort by Key
            break;
    }

};

//Set Samplers 1-8 Gain 
PioneerDDJREV1.samplerVolume = function (channel, control, value, status, group) {
    //Toggle Sample push    
    PioneerDDJREV1.sampleShiftPressed = !PioneerDDJREV1.sampleShiftPressed;
    //Save Channel for Level\Depth
    PioneerDDJREV1.lastStemChannel = group;

    if (!PioneerDDJREV1.tempSamplerSkin) { return; }//Remove sampler if enabled 
    engine.setParameter("[Skin]", "show_samplers", false);

    // Re-sync Sampler lights if track loaded
    const samplerRanges = [
        { channel: 0x97, start: 1 },
        { channel: 0x99, start: 5 }
    ];
    samplerRanges.forEach(range => {
        for (let i = 0; i < 4; ++i) {
            const samplerNumber = range.start + i;
            const trackLoaded = engine.getValue(`[Sampler${samplerNumber}]`, "track_loaded");
            const state = trackLoaded ? 0x7F : 0x00;
            midi.sendShortMsg(range.channel, 0x30 + i, state);
        }
    });

}

/////////////////////////////////////////////////
// Start Faders
/////////////////////////////////////////////////
PioneerDDJREV1.crossFaderStart = function (_channel, _control, value, _status, group) {
    let opposite_channels = { 1: 2, 2: 1, 3: 4, 4: 3 };

    let glitchcorrectionChannels = { 1: 3, 2: 1, 2: 4, 4: 2 };

    value = engine.getValue("[Master]", "crossfader");
    PioneerDDJREV1.lastCrossFader = value;

    // Check if the crossfader is at the extreme left or right
    let isAtLeft = Math.abs(value + 1) < 0.01; // Check if near -1 (left)
    let isAtRight = Math.abs(value - 1) < 0.01; // Check if near 1 (right)

    const channelGroups = { '[Channel1]': 1, '[Channel2]': 2, '[Channel3]': 3, '[Channel4]': 4 };

    if (group in channelGroups) {
        let current_channel = channelGroups[group];
        let opposite_channel = opposite_channels[current_channel];
        let opposite_group = `[Channel${opposite_channel}]`;

        let stopChannel = glitchcorrectionChannels[current_channel];
        let stopGroup = `[Channel${stopChannel}]`;

        if (PioneerDDJREV1.shiftPressed) {
            if (isAtLeft) { //CrossFader start Left
                engine.setValue(opposite_group, "play", 1);
                engine.setValue(stopGroup, "play", 0);
                engine.setValue(stopGroup, "cue_gotoandstop", 1);
                engine.setValue(group, "play", 0);
                engine.setValue(group, "cue_gotoandstop", 1);
            } else if (isAtRight) { //CrossFader Right
                engine.setValue(opposite_group, "play", 1);
                engine.setValue(stopGroup, "play", 0);
                engine.setValue(stopGroup, "cue_gotoandstop", 1);
                engine.setValue(group, "play", 0);
                engine.setValue(group, "cue_gotoandstop", 1);
            } else { //Channel Faders Start
                engine.setValue(opposite_group, "play", 1);
                engine.setValue(stopGroup, "play", 0);
                engine.setValue(stopGroup, "cue_gotoandstop", 1);
                engine.setValue(group, "play", 0);
                engine.setValue(group, "cue_gotoandstop", 1);
            }
        }
        PioneerDDJREV1.lastCrossFader = value;
    }
};

/////////////////////////////////////////////////
// STEMS
/////////////////////////////////////////////////
PioneerDDJREV1.levelDepth = function (_channel, _control, value, _status, _group) {

    // Regular Level/Depth  FX1/FX2
    if (!PioneerDDJREV1.stemShiftPressed && !PioneerDDJREV1.stemEffectPressed && !PioneerDDJREV1.sampleShiftPressed) {
        let volumeBit = value / 127;

        engine.setValue("[EffectRack1_EffectUnit1]", "super1", volumeBit)
        engine.setValue("[EffectRack1_EffectUnit2]", "super1", volumeBit)
    }

    //Level/Depth for Stem Mute
    if (PioneerDDJREV1.stemShiftPressed) {
        let volumeBit = value / 127;
        engine.setValue(PioneerDDJREV1.lastStemChannel, "volume", volumeBit)
    }

    //Level/Depth for Stem Effect
    if (PioneerDDJREV1.stemEffectPressed) {
        let volumeBit = value / 127;
        engine.setValue(PioneerDDJREV1.lastStemChannel, "super1", volumeBit)

    }

    //Level/Depth for Sampler Volume 1-8
    if (PioneerDDJREV1.sampleShiftPressed) {

        if (PioneerDDJREV1.tempSamplerSkin) { //Show sampler if enabled 
            engine.setParameter("[Skin]", "show_samplers", true);
        }

        let volumeBit = value / 127;
        for (let i = 1; i <= 8; ++i) {
            var sample = "[Sampler" + i + "]";
            engine.setValue(sample, "pregain", volumeBit)
        }
    }
};
//Stem Effects
PioneerDDJREV1.stemEffect = function (_channel, _control, value, _status, group) {
    //Toggle Effect push 
    PioneerDDJREV1.stemEffectPressed = !PioneerDDJREV1.stemEffectPressed; // '!' inverts a boolean (true/false) value 

    //Save Channel for levelDepth
    PioneerDDJREV1.lastStemChannel = group;

    //Toggle Stem Channel 
    if (value === 127) {
        currentStemEffect = engine.getValue(group, "enabled");
        engine.setValue(group, "enabled", currentStemEffect === 0 ? 1 : 0);
    }
};
//Stem Mute
PioneerDDJREV1.stemShift = function (_channel, _control, value, _status, group) {
    //Toggle Stem push    
    PioneerDDJREV1.stemShiftPressed = !PioneerDDJREV1.stemShiftPressed;

    //Save Channel for levelDepth
    PioneerDDJREV1.lastStemChannel = group;

    //Toggle Stem Channel 
    if (value === 127) {
        currentStemMute = engine.getValue(group, "mute");
        engine.setValue(group, "mute", currentStemMute === 0 ? 1 : 0);
    }
};
/////////////////////////////////////////////////
// MAN. Effects
/////////////////////////////////////////////////
// Initialize effect states for tracking controller button states
PioneerDDJREV1.effectStates = {
    FX1: [false, false, false], // f1, f2, f3 - tracks what controller reports
    FX2: [false, false, false]  // f1, f2, f3 - tracks what controller reports
};

// Button states tracker for detecting simultaneous presses
PioneerDDJREV1.buttonStates = {
    FX1: [false, false, false], // f1, f2, f3
    FX2: [false, false, false]  // f1, f2, f3
};
PioneerDDJREV1.activeCount = 0;

// FX button handler - processes button presses and maintains synchronization
PioneerDDJREV1.FX = function (channel, control, value, status, group) {    
    // Determine the FX group based on channel (0x94 = channel 5, 0x95 = channel 6)
    var fxGroup = null;
    var mixxxUnit = null;
    
    if (status === 0x94) { // Channel 5
        fxGroup = "FX1";
        mixxxUnit = "[EffectRack1_EffectUnit1]";
    } else if (status === 0x95) { // Channel 6
        fxGroup = "FX2";
        mixxxUnit = "[EffectRack1_EffectUnit2]";
    }

    if (!fxGroup || !mixxxUnit) {
        return;
    }

    // Find which button was pressed Map MIDI control numbers to button indices (0 = f1, 1 = f2, 2 = f3)
    var buttonIndex = -1;
    switch (control) {
        case 0x70: buttonIndex = 0; break; // F1
        case 0x71: buttonIndex = 1; break; // F2
        case 0x72: buttonIndex = 2; break; // F3
    }

    if (buttonIndex === -1) {
        return;
    }

    // Track physical button states (press = true, release = false)
    if (value > 0) {
        PioneerDDJREV1.buttonStates[fxGroup][buttonIndex] = true;
    } else {
        PioneerDDJREV1.buttonStates[fxGroup][buttonIndex] = false;
    }

    // For button releases (value === 0), we still need to buffer them to maintain proper state tracking
    PioneerDDJREV1.bufferButtonPress(fxGroup, buttonIndex, mixxxUnit);
};

// Enable only one effect, disable others in the same group
PioneerDDJREV1.syncSingleEffect = function(fxGroup, activeButtonIndex, mixxxUnit) {
    const unitNumber = mixxxUnit.includes("Unit1") ? 1 : 2;
    if (this.buttonStates[fxGroup][activeButtonIndex]){
        var effectGroup = "[EffectRack1_EffectUnit" + unitNumber + "_Effect" + (i + 1) + "]";
        engine.setValue(effectGroup, "enabled", 0);
        return;
    }
    for (var i = 0; i < 3; i++) {
        var effectGroup = "[EffectRack1_EffectUnit" + unitNumber + "_Effect" + (i + 1) + "]";
        engine.setValue(effectGroup, "enabled", i === activeButtonIndex ? 1 : 0);
    }
};

// Enable two effects based on controller's current state
PioneerDDJREV1.syncDualEffects = function(fxGroup, mixxxUnit, buttonIndices) {
    const unitNumber = mixxxUnit.includes("Unit1") ? 1 : 2;
    
    for (var i = 0; i < 3; i++) {
        var effectGroup = "[EffectRack1_EffectUnit" + unitNumber + "_Effect" + (i + 1) + "]";
        // Enable only the buttons that were actually pressed
        engine.setValue(effectGroup, "enabled", buttonIndices.includes(i) ? 1 : 0);
    }
};

// Enable all three effects when controller reports all buttons active
PioneerDDJREV1.syncAllEffects = function(mixxxUnit) {
    const unitNumber = mixxxUnit.includes("Unit1") ? 1 : 2;
    
    for (var i = 0; i < 3; i++) {
        var effectGroup = "[EffectRack1_EffectUnit" + unitNumber + "_Effect" + (i + 1) + "]";
        engine.setValue(effectGroup, "enabled", 1);
    }
};

// Disable all effects when controller reports no buttons active
PioneerDDJREV1.syncNoEffects = function(mixxxUnit) {
    const unitNumber = mixxxUnit.includes("Unit1") ? 1 : 2;
    
    for (var i = 0; i < 3; i++) {
        var effectGroup = "[EffectRack1_EffectUnit" + unitNumber + "_Effect" + (i + 1) + "]";
        engine.setValue(effectGroup, "enabled", 0);
    }
};

// Selector function for effect navigation
PioneerDDJREV1.selector = function (_channel, _control, value, _status, group) {
    const anyButtonPressed = PioneerDDJREV1.buttonStates.FX1.some(state => state) || PioneerDDJREV1.buttonStates.FX2.some(state => state);

    // BROWSE - rotate - Scroll up/down through tracks in library
    if (!anyButtonPressed) {
        if (value === 0x7F) {
            engine.setValue(group, "MoveUp", 1);
        } else if (value === 0x01) {
            engine.setValue("[Library]", "MoveDown", 1);
        }
    }

    const fxGroups = {
        FX1: "[EffectRack1_EffectUnit1",
        FX2: "[EffectRack1_EffectUnit2"
    };

    // Designate effect for selected FX button. (Descending)
    for (const groupKey in fxGroups) {
        const unitGroup = fxGroups[groupKey];
        for (var i = 0; i < 3; i++) {
            if (PioneerDDJREV1.buttonStates[groupKey][i]) {
                if (value === 0x7F) {
                    engine.setValue(unitGroup + "_Effect" + (i + 1) + "]", "effect_selector", -1);
                } else if (value === 0x01) {
                    engine.setValue(unitGroup + "_Effect" + (i + 1) + "]", "effect_selector", 1);
                }
            }
        }
    }
};
/////////////////////////////////////////////////////
/////////////////////////////////////////////////////
// Scratch Bank
PioneerDDJREV1.deckMappings = {
    7: "[Channel1]",
    9: "[Channel2]",
    11: "[Channel3]",
    13: "[Channel4]"
};

PioneerDDJREV1.samplerMappings = {
    7: { midiChannel: 0x97, samples: { 0x34: 9, 0x35: 10, 0x36: 11, 0x37: 12 } },
    9: { midiChannel: 0x99, samples: { 0x34: 13, 0x35: 14, 0x36: 15, 0x37: 16 } },
    11: { midiChannel: 0x9B, samples: { 0x34: 9, 0x35: 10, 0x36: 11, 0x37: 12 } },
    13: { midiChannel: 0x9D, samples: { 0x34: 13, 0x35: 14, 0x36: 15, 0x37: 16 } }
};

// Main function to load scratch samples to decks
PioneerDDJREV1.loadScratchToDeck = function (channel, control, value, status, group) {
    if (!value){
         return;
         }

    // Get deck number
    var deckNumber = PioneerDDJREV1.deckMappings[channel] || "[Channel1]";

    // Get sampler mapping for this channel
    var channelMapping = PioneerDDJREV1.samplerMappings[channel] || { midiChannel: 0x97, samples: {} };
    var midiChannel = channelMapping.midiChannel;
    var samplerNumber = (channelMapping.samples && channelMapping.samples[control]) || 1;

    // Handle deck selection lighting logic for buttons 0x34-0x37
    if (control >= 0x34 && control <= 0x37) {
        // Turn off all lights for this channel first
        for (var i = 0x34; i <= 0x37; i++) {
            midi.sendShortMsg(midiChannel, i, 0x00);
        }
        // Load sample to deck
        try {
            var sampler = engine.getValue(group, "track_loaded");
            if (!sampler) {
                console.warn("No sample loaded in Sampler" + samplerNumber);
                return;
            }
            // Set new selection and light up the button
            midi.sendShortMsg(midiChannel, control, 0x7F);

            engine.setValue(deckNumber, "CloneFromSampler", samplerNumber);
            console.log("Loaded sample " + samplerNumber + " into deck " + deckNumber);
        } catch (error) {
            console.error("Error loading sample to deck:", error);
        }

    }


};

/* 
// Function to load sample and play immediately                                          -------------Unsed add to Shift if open
this.loadAndPlaySample = function (sampleNumber, deckNumber) {
    if (loadSampleToDeck(sampleNumber, deckNumber)) {
        // Trigger play after loading
        engine.setValue("[Channel" + deckNumber + "]", "play", 1);
        return true;
    }
    return false;
}
 */
/////////////////////////////////////////////////
// Shutdown
/////////////////////////////////////////////////

PioneerDDJREV1.shutdown = function () {
    // reset vumeter
    PioneerDDJREV1.toggleLight(PioneerDDJREV1.lights.deck1.vuMeter, false);
    PioneerDDJREV1.toggleLight(PioneerDDJREV1.lights.deck2.vuMeter, false);

    // housekeeping
    // turn off all Sampler LEDs
    for (let i = 0; i <= 7; ++i) {
        midi.sendShortMsg(0x97, 0x30 + i, 0x00);    // Deck 1 pads
        midi.sendShortMsg(0x98, 0x30 + i, 0x00);    // Deck 1 pads with SHIFT
        midi.sendShortMsg(0x99, 0x30 + i, 0x00);    // Deck 2 pads
        midi.sendShortMsg(0x9A, 0x30 + i, 0x00);    // Deck 2 pads with SHIFT
    }
    // turn off all Hotcue LEDs
    for (let i = 0; i <= 7; ++i) {
        midi.sendShortMsg(0x97, 0x00 + i, 0x00);    // Deck 1 pads
        midi.sendShortMsg(0x98, 0x00 + i, 0x00);    // Deck 1 pads with SHIFT
        midi.sendShortMsg(0x99, 0x00 + i, 0x00);    // Deck 2 pads
        midi.sendShortMsg(0x9A, 0x00 + i, 0x00);    // Deck 2 pads with SHIFT
    }

    // turn off loop in and out lights
    PioneerDDJREV1.setLoopButtonLights(0x90, 0x00);
    PioneerDDJREV1.setLoopButtonLights(0x91, 0x00);

    // turn off reloop lights
    PioneerDDJREV1.setReloopLight(0x90, 0x00);
    PioneerDDJREV1.setReloopLight(0x91, 0x00);

    // stop any flashing lights
    PioneerDDJREV1.toggleLight(PioneerDDJREV1.lights.beatFx, false);
    PioneerDDJREV1.toggleLight(PioneerDDJREV1.lights.shiftBeatFx, false);
};
