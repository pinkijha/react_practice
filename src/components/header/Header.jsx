import React from "react";
import { Button, Input } from "antd";
import { House} from "lucide-react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const { Search } = Input;
  return (
    <div className="flex justify-between items-center bg-green-100 p-4 shadow-md">
      <div>
        <h1 className="text-3xl text-[#008000] font-bold"><NavLink to="/"><House/></NavLink></h1>
      </div>
      <div>
        <Search
          placeholder="input search text"
          allowClear
          // enterButton="Search"
          enterButton= {
            <Button style={{backgroundColor: '#008000', color: "white"}}  type="primary">
              Search
            </Button>
          }
          size="large"
          // onSearch={onSearch}
        />
      </div>
      <div>
        <button className="bg-[#008000] text-white px-4 py-2 rounded hover:bg-green-600">
          Login
        </button>
      </div>
    </div>
  );
};

export default Header;
