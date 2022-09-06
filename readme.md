# Wavicle

A browser-based keyboard app.

![screenshot](https://i.gyazo.com/1e993b64d63c7809d697d0af5f59f8dc.png)

## Application
https://miqsel.net/apps/wavicle

## Features
There are 4 acoustic instrument and 20 synthesizer based timbres.
You can play with PC keyboard or MIDI Keyboard.
There is Release parameter to adjust the duration of afterglow.

## How it works

WebAudio is used to play tones.
Pitched tones are generated by altering playback rate of samples.
It has seamless looping mechanism to play sustained tone.
Samples are consist of 4 second of recorded waveform for each octave.
Source samples are determined by selecting nearest waveform in note scale from played note.


## Debug
```
yarn
yarn start
```

## License
MIT license.
