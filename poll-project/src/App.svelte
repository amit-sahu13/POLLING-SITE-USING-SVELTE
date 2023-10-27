<script>
	import Header from './components/Header.svelte';
	import Footer from './components/Footer.svelte';
	import CreatePollForm from './components/CreatePollForm.svelte';
	import Tabs from './shared/Tabs.svelte';
	import PollList from './components/PollList.svelte';

	let items = ['Current Polls','Add New Poll'];
	let activeItem = 'Current Polls';
	const tabChange = (e) =>{
		activeItem = e.detail;
	}

	let polls = [
		{
			id: 1,
			question: "Which language do you prefer?",
			answerA: "Java",
			answerB: "C++",
			votesA: 10,
			votesB: 3
		},
		{
			id: 2,
			question: "Who will win today's match?",
			answerA: "Pakistan",
			answerB: "India",
			votesA: 6,
			votesB: 12
		}
	];

	const handleAdd = (e) =>{
		const poll = e.detail;
		polls = [poll,...polls];
		activeItem = 'Current Polls';
	}

	const handleVote = (e) =>{
		const {id,option} = e.detail;
		let copiedPolls = [...polls];
		let upvotedPoll = copiedPolls.find((poll) => poll.id==id);

		if(option === 'a'){
			upvotedPoll.votesA++;
		}
		if(option === 'b'){
			upvotedPoll.votesB++;
		}

		polls = copiedPolls;
	}

</script>

<Header/>

<main>
	<Tabs {activeItem} {items} on:tabChange={tabChange}/>
	{#if activeItem === 'Current Polls'}
	<PollList {polls} on:vote={handleVote}/>
	{:else if activeItem === 'Add New Poll'}
	<CreatePollForm  on:add={handleAdd}/>
	{/if}
</main>
<Footer/>

<style>
	main{
		max-width: 960px; 
		margin: 40px auto;
	}
</style>