import type { Preview } from '@storybook/react-vite';
import '../src/index.css';

const preview: Preview = {
  decorators: [
    (Story, context) => {
      if (context.viewMode === 'docs')
        return (
          <div className="bg-slate-900 w-full p-8 bg-pattern bg-no-repeat bg-center bg-cover bg-fixed flex justify-center items-center">
            <Story />
          </div>
        );
      return (
        <div className="bg-slate-900 absolute p-8 inset-0 bg-pattern bg-no-repeat bg-center bg-cover bg-fixed flex justify-center items-center">
          <Story />
        </div>
      );
    },
  ],
};

export default preview;
