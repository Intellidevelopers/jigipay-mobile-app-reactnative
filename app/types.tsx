
// Define the type for your stack's parameter list
export type RootStackParamList = {
  explore: undefined;
  TransactionDetails: { transaction: Transaction };
};

// Define the type for a transaction
export type Transaction = {
  id: string;
  name: string;
  date: string;
  amount: string;
  status: string;
  image: any; // Replace 'any' with the appropriate type if known, e.g., ImageSourcePropType
};
