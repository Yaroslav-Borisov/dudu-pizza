import { DoughMap, SizesMap } from '../../const';
import { PizzaDoughOption, PizzaSizeOption } from '../../types';

interface OptionsProps {
    map: typeof SizesMap | typeof DoughMap;
    state: PizzaDoughOption | PizzaSizeOption;
    onClick: (state: PizzaDoughOption | PizzaSizeOption) => void;
  }
  
const Options = ({ map, state, onClick }: OptionsProps) => {

	const getClass = (obj: PizzaDoughOption | PizzaSizeOption) => {
		if(state === obj) {
			return 'button --outline --active';
		} else {
			return 'button --outline';
		}
	};

	return (
		<>
			{Object.entries(map).map(([type, obj]) => (
				<button
					key={type}
					className={getClass(obj)}
					disabled={state === obj}
					onClick={() => onClick(obj)}>
					{obj.name}
				</button>
			))}
		</>
	);
};
  
export default Options;