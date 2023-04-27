export type User = {
  name: {
    type: string | null;
    required: false;
  };
  email: {
    type: string;
    required: true;
  };
  password: {
    type: string;
    required: true;
  };
};
