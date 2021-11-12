import { Button } from "@material-ui/core";
import { useUppercase } from "../hooks/useUppercase";
import useToggle from "../hooks/useToggle";

type GreetingsProps = {
    name: string;
    onSendWaves?: (waves: string) => void;
  };
  
  export const Greetings = ({ 
    name, 
    onSendWaves 
  }: GreetingsProps) => {
    const [toggleState, { toggle }] = useToggle();
    const { value } = useUppercase(name);
    console.log('name value', value);
    return (
      <div>
        <p>Hello {value}!</p>
        {!!onSendWaves && (
          <button
            type="button"
            onClick={() => 
                onSendWaves(`Waves sent to ${value}!`)}
          >
            Send 👋
          </button>
        )}
        <h3>{toggleState}</h3>
        <Button variant="contained" color="primary" onClick={toggle}>
        Toggle
      </Button>
      </div>
    );
  };