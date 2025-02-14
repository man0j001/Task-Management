import React from 'react';
import useTasks from '../hooks/useTasks';
import TaskItem from './TaskItem';

const TaskList = () => {
    const { tasks, loading, error } = useTasks();

    if (loading) return (<div className='flex justify-center w-full'><div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-violet-400"></div></div>);
    if (error) return <div>Error: {error}</div>;

    return (
        <section className="md:ml-6 w-full grid md:grid-cols-2 md:gap-4">
            {tasks.map(task => (
                <TaskItem key={task.id} task={task} />
            ))}
        </section>
    );
};

export default TaskList;
