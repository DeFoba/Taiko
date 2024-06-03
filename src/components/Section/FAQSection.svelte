<script lang="ts">
  import SectionContainer from '../Container/SectionContainer.svelte';

  // Unix timestamp for January 1, 2025

  import FaqDropdown from '../Dropdown/FAQDropdown.svelte';
  import { screen } from '$stores/responsiveness';
  import { DesktopOrLarger } from '$components/DesktopOrLarger';

  let isDesktopOrLarger: boolean;

  let faqs = [
    {
      question: 'How much percentage of the initial supply is available to claim today?',
      answer: 'We’re offering 5% of the initial token supply in Phase 1 of our airdrop season.',
    },
    {
      question: 'What did I have to do to have qualified for this airdrop?',
      answer:
        'Block proposing, block proving, interacting with our testnet(s), participating in Galxe campaigns, github contributions on eligible repositories, and Ethereum ICO participants who transacted between 2022-02-01 00:00:00h and 2024-02-01 00:00:00h on mainnet',
    },
    {
      question: 'Will participating or being in more activities result in earning more tokens?',
      answer:
        'Yes! For example, if you participated in the ETH ICO and you were a Taiko Proposer, your allocation will be increased.',
    },
    {
      question: 'Is every ETH ICO participant going to get the allocation?',
      answer:
        'Only ETH ICO participants who transacted between 2022-02-01 00:00:00h and 2024-02-01 00:00:00h will be eligible for the airdrop.',
    },
    {
      question:
        'I used a different wallet for the ETH ICO and a different wallet for the Taiko network participation. Can I merge those two wallets to get the allocation increase?',
      answer:
        'Only the active wallets who participated in the ETH ICO and the Taiko network will be considered for allocation increase. If both your wallets are eligible, you can claim for each one.',
    },
    {
      question: 'Can I enter with multiple wallets to increase the chance of getting the airdrop?',
      answer:
        'You can enter with as many as eligible wallets as you want, but bear in mind that only the top wallets will be eligible for the airdrop, hence why we suggest focusing on tasks and increasing chances on one wallet.',
    },
    {
      question: "I am a Loopring holder but I can't see if I'm eligible on the claim page, why?",
      answer:
        'In this case, the distribution to eligible wallets will be provided by Loopring. Feel free to reach out to the Loopring community to Claim TKO.',
    },
    {
      question: "I had a high rank on the Galxe leaderboard, but I didn't get the allocation, why?",
      answer:
        'We are providing allocation for our most dedicated users. While Galxe is one of the categories to get the allocation, the participation in just one activity does not guarantee allocation. The more categories you participated in, the higher the probability of you securing the allocation.',
    },
    {
      question: 'How long do I have to claim my tokens?',
      answer: 'Eligible users will have one month to claim their tokens.',
    },

    {
      question: 'I ran a RPC-only node, why am I not eligible?',
      answer:
        'We appreciate your participation and involvement in our ecosystem, however running a node is very difficult to verify. We hope you continue participating in ongoing campaigns for future rewards.',
    },
    {
      question:
        'I participated in every Taiko testnet, why did I get a smaller airdrop than my friend who only participated in a5 onwards?',
      answer:
        'It comes down to the activities that you completed on each testnet. Allocation to each person is based on the difficulty of the task and the number of other people who also completed tasks in that category. So the hierarchy looks like this: Provers > Proposers > Devs > General users (on-chain transactions and Galxe tasks)',
    },
    {
      question: 'Why Provers and Proposers have a higher priority in token allocation?',
      answer:
        "Proposers and provers play a crucial role in Taiko's network function. As maintainers of our infrastructure, their role requires more work and has more impact on our network compared to the General User, hence the reason for the higher priority in token allocation. A note: not every prover and proposer by default is eligible to get TKO, they also needed to perform a minimum activity, based on some weighted metric.",
    },
    {
      question: 'I think I should have qualified. How can I submit a request to be reconsidered?',
      answer:
        'We had an overwhelming turnout for our testnet campaigns. This meant that we needed to restrict the list of eligible addresses in some way so that the airdrop was not divided by too many participants. So while we really appreciate that you participated, it might be that you did not make it into the top 300,000+ eligible addresses. It is also possible that you were flagged as a sybil account for abnormal behavior.',
    },
    {
      question: 'What are L1s and L2s?',
      answer:
        'Ethereum is an L1 blockchain which means it can support smart contracts being deployed on it. However, it has difficulty remaining accessible when transaction volume is high. That is where L2s come in. L2s are additional blockchains that are attached to L1s and rely on it to secure and finalize the transactions that occur on the L2. As an L2, Taiko can support all the same smart contracts that exist on Ethereum, but it is cheaper to interact with them.',
    },
    {
      question: 'How much ETH do I need to send to the Taiko network to claim TKO?',
      answer:
        'Taiko is significantly cheaper than Ethereum mainnet, so you will need very little ETH to claim your TKO airdrop. However, you may want to consider sending over more than the minimum so that you are ready to take advantage of the early launch campaigns that will be available to you.',
    },
    {
      question: 'Will the TKO genesis airdrop claim happen on L1 or L2?',
      answer: 'The TKO genesis airdrop claim will happen on the Taiko Mainnet L2.',
    },
    {
      question: 'I no longer have access to the wallet I used during the testnets. How can I claim my TKO?',
      answer:
        'Unfortunately, we are unable to help in this situation, as there would be no way to verify that you are the original owner of the wallet. It is important to stay vigilant and make sure you are engaging with official links only, and take extra care to protect your private keys.',
    },
    {
      question: 'What does github contributor mean in this context?',
      answer: 'At least need to have 1 PR merged into any of those repositories before 1st of March 2024.',
    },
    {
      question:
        "I'm an eligible Github user, but I wasn't able to do the binding. Will this affect my airdrop contribution?",
      answer:
        "Yes, it will affect your airdrop contribution. After the 7-day eligibility check for Github users, anyone who hasn't done the binding forfeits their allocation for Github contribution.",
    },
    {
      question: "I've claimed my TKO, when will I receive it?",
      answer: 'If you can claim TKO, it will be sent to you immediately on-chain.',
    },
    {
      question: 'Will the tokens be subject to any vesting period?',
      answer: 'Airdrop tokens are not locked and have no vesting period.',
    },
    {
      question: "I'm having issues with the claims process. Where can I go for support?",
      answer: 'You can always come to our Discord server to get support. #',
    },
    {
      question: "How to make sure that I'm using the real Taiko website and the real token claim page?",
      answer:
        "Phishing and scams come in many forms so we strive to make sure that our community is safe and secure, hence why it's important to check any details and links and only interact with the official Website and Discord channel. Do not click on links or download attachments from anyone. Our team will not ask for sensitive information in any shape or form. Always check that the information you receive is from official Taiko accounts. If you're in doubt, contact our team on the Discord channel. Never share your Secret Recovery Phrase (passphrase) or private keys of your crypto wallet with anyone. It would give that person the ability to access and transfer all of your funds.",
    },
    {
      question: 'What will happen to unclaimed tokens?',
      answer: 'Unclaimed tokens will be sent back to the DAO treasury.',
    },
  ];

  $: attrs = isDesktopOrLarger ? { 'data-glow-border': true } : {};
</script>

<SectionContainer flexDirection={$screen == 'desktop' ? 'row' : 'column'} backgroundColor="none">
  <div class="flex flex-col w-full lg:w-1/5 items-center lg:place-self-start h-full">
    <div class="display-small-medium">FAQs</div>
  </div>
  <div class="flex flex-col w-full gap-4">
    <div data-glow-border class="join join-vertical rounded-[20px]">
      {#each faqs as { question, answer }}
        <FaqDropdown {question} {answer}></FaqDropdown>
      {/each}
    </div>
  </div>
</SectionContainer>

<DesktopOrLarger bind:is={isDesktopOrLarger} />
