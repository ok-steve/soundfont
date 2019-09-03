import state from './state';

const envelope = state.map((data) => ({
  attack: parseFloat(data.get('envelope-attack')),
  decay: parseFloat(data.get('envelope-decay')),
  sustain: parseFloat(data.get('envelope-sustain')),
  release: parseFloat(data.get('envelope-release')),
}));

export default envelope;
