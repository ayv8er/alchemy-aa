import { useEffect, useMemo, useCallback, useState } from 'react';
import { useMagic } from '../magic/MagicProvider';
import { 
  type SmartAccountClient, 
  type SmartAccountSigner, 
  WalletClientSigner, 
  sepolia 
} from '@alchemy/aa-core';
import { createModularAccountAlchemyClient } from '@alchemy/aa-alchemy';
import { getAlchemyApiKey } from '@/utils/network';

export const useAlchemyProvider = () => {
  const { magic, walletClient } = useMagic();
  const chain = sepolia;
  const [smartClient, setSmartClient] = useState<SmartAccountClient>();

  const magicSigner: SmartAccountSigner | undefined = useMemo(() => {
    if (!walletClient) return;
    return new WalletClientSigner(walletClient, 'magic');
  }, [walletClient])
    
  const connectToSmartContractAccount = useCallback(async () => {
    if (!magicSigner || !magic) return;

    const client = await createModularAccountAlchemyClient({
      apiKey: getAlchemyApiKey(),
      chain,
      signer: magicSigner,
      gasManagerConfig: {
        policyId: process.env.NEXT_PUBLIC_ALCHEMY_GAS_POLICY_ID as string,
      }
    });
    
    setSmartClient(client);
  }, [chain, magic, magicSigner])
    
  useEffect(() => {
    if (magic?.user.isLoggedIn) {
      connectToSmartContractAccount()
    }
  }, [magic?.user.isLoggedIn, connectToSmartContractAccount])

  return {
    smartClient,
  }
}