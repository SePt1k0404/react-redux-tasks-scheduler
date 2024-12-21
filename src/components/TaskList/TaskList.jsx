import { Task } from '../Task/Task';
import css from './TaskList.module.css';
import { statusFilters } from '../../redux/constants';
import { useSelector } from 'react-redux';
import { getStatusFilter, getTasks } from '../../redux/selectors';

const getVisibleTasks = (tasks, statusFilter) => {
  switch (statusFilter) {
    case statusFilters.active:
      return tasks.filter((task) => !task.completed);
    case statusFilters.completed:
      return tasks.filter((task) => task.completed);
    default:
      return tasks;
  }
};

export const TaskList = () => {
  const tasks = useSelector(getTasks);
  const filter = useSelector(getStatusFilter);
  const visibleTasks = getVisibleTasks(tasks, filter);
  return (
    <ul className={css.list}>
      {visibleTasks.map((task) => (
        <li className={css.listItem} key={task.id}>
          <Task task={task} />
        </li>
      ))}
    </ul>
  );
};
