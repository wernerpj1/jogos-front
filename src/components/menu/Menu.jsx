import React, {memo} from "react";
import Burger from "./burguer/Burger";
import * as M from './StyledMenu';



function Menu(){
    return (
        <M.Menu>
          <Burger />         
       </M.Menu>
    );
}
export default memo(Menu)