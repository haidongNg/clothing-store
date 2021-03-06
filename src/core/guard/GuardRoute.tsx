import { FC, ComponentType, LazyExoticComponent } from 'react';
import { Redirect, Route, RouteComponentProps } from 'react-router-dom';
import { MemberInfo } from '../models/member-info.model';

// Type
type GuardRouteProps = {
  component:
    | ComponentType<RouteComponentProps<any>>
    | ComponentType<any>
    | LazyExoticComponent<ComponentType<any>>;
  currentMember?: MemberInfo;
};

const GuardRoute: FC<GuardRouteProps> = ({
  component: ComponentType,
  currentMember,...rest
}) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        currentMember && Object.keys(currentMember).length > 0 ? (
          <Redirect to="/" />
        ) : (
          <ComponentType {...props} />
        )
      }
    />
  );
};

export default GuardRoute;
