import { IRole } from "../model";
import Button from "./Button";

interface RolesProps {
  onClickRole: (role: string) => void;
  roles: IRole[];
  isLoading?: boolean;
}

const Roles: React.FC<RolesProps> = ({ onClickRole, roles, isLoading }) => {
  const RoleButton = ({ role }: { role: IRole }) => (
    <Button kind="secondary" onClick={() => onClickRole(role.key)} disabled={isLoading}>
      {role.name}
    </Button>
  );

  return (
    <div className="flex flex-col items-center gap-3 sm:gap-5">
      <h2 className="font-bidNoodleToo text-5xl sm:text-6xl text-center">Select your role</h2>
      <div className="flex flex-row gap-3 sm:gap-5 flex-wrap items-center justify-center">
        {roles.map(role => <RoleButton key={role.key} role={role} />)}
      </div>
    </div>
  )
}

export default Roles;