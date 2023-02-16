import "./Table.css";
import {
    ColumnDirective,
    ColumnsDirective,
    ContextMenu,
    Filter,
    GridComponent,
    Inject,
    Page,
    Resize,
    Sort,
} from "@syncfusion/ej2-react-grids";
import { DBUser } from "../@types";

type Props = {
    users: DBUser[];
};

export default function Table({ users }: Props) {
    return (
        <GridComponent
            filterSettings={{ type: "CheckBox" }}
            allowPaging
            allowSorting
            dataSource={users}
            pageSettings={{ pageSize: 13 }}
            allowFiltering={true}
        >
            <ColumnsDirective>
                <ColumnDirective
                    field="fullname"
                    width="40"
                    textAlign="Left"
                    headerText="User"
                    template={generateImg}
                />
                <ColumnDirective field="email" width="40" textAlign="Left" headerText="Email" />
                <ColumnDirective field="dob.age" width="10" textAlign="Left" headerText="Age" />
                <ColumnDirective field="gender" width="20" textAlign="Left" headerText="Gender" />
                <ColumnDirective
                    field="location.country"
                    width="40"
                    textAlign="Left"
                    headerText="Country"
                    template={generateCity}
                />
                <ColumnDirective field="phone" width="30" textAlign="Left" headerText="Phone" />
            </ColumnsDirective>
            <Inject services={[Resize, Page, Sort, ContextMenu, Filter]} />
        </GridComponent>
    );
}

function generateImg(props: DBUser) {
    return (
        <div className="flex items-center gap-2">
            <img
                className="rounded-full w-10 h-10"
                src={props.picture.thumbnail}
                alt="user_thumbnail"
            />
            <p className="font-medium">{props.fullname}</p>
        </div>
    );
}

function generateCity(user: DBUser) {
    return (
        <p className="font-semibold">
            {`${user.location.city}, ${user.location.state}, ${user.location.country}`}
        </p>
    );
}

/** <ColumnDirective
     field="fullname"
     width="50"
     textAlign="Left"
     headerText="FullName" /> 

     toolbar={["Search"]}
            searchSettings={{
                fields: [
                    "email",
                    "dob.age",
                    "location.city",
                    "location.state",
                    "location.country",
                    "gender",
                    "fullname",
                ],
            }}
*/
