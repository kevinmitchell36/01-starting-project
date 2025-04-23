
import componentsImg from './assets/images/components.png';
import propsImg from './assets/images/config.png';
import jsxImg from './assets/images/jsx-ui.png';
import stateImg from './assets/images/state-mgmt.png';

export const CORE_CONCEPTS = [
  {
    id: 1,
    image: componentsImg,
    title: 'Components',
    description:
      'The core UI building block - compose the user interface by combining multiple components.',
  },
  {
    id: 2,
    image: jsxImg,
    title: 'JSX',
    description:
      'Return (potentially dynamic) HTML(ish) code to define the actual markup that will be rendered.',
  },
  {
    id: 3,
    image: propsImg,
    title: 'Props',
    description:
      'Make components configurable (and therefore reusable) by passing input data to them.',
  },
  {
    id: 4,
    image: stateImg,
    title: 'State',
    description:
      'React-managed data which, when changed, causes the component to re-render & the UI to update.',
  },
];