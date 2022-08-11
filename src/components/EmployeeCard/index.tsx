import React from "react";
import {
  Card,
  CardHeader,
  Avatar,
  CardContent,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";
import BadgeIcon from "@mui/icons-material/Badge";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import SwitchAccountIcon from "@mui/icons-material/SwitchAccount";
import { IEmployee } from "../../entities/employee";

interface EmployeeCardProps {
  employee: IEmployee;
}

const EmployeeCard: React.FC<EmployeeCardProps> = ({ employee }) => {
  return (
    <Card sx={{ minWidth: 600 }}>
      <CardHeader
        sx={{ textAlign: "center" }}
        title={`${employee.firstName} ${employee.lastName}`}
      />
      <CardContent>
        <List
          sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        >
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <AlternateEmailIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={employee.email} secondary="Email" />
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <SwitchAccountIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={employee.type} secondary="Type" />
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <BadgeIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={employee._id} secondary="ID" />
          </ListItem>
        </List>
      </CardContent>
    </Card>
  );
};

export default EmployeeCard;
