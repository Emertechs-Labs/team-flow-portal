
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Clock, Calendar } from "lucide-react";

export interface Task {
  id: string;
  title: string;
  description: string;
  status: 'todo' | 'in-progress' | 'completed' | 'blocked';
  priority: 'low' | 'medium' | 'high';
  progress: number;
  dueDate: string;
  assignee: {
    name: string;
    avatar?: string;
  };
}

interface TaskCardProps {
  task: Task;
  onClick?: () => void;
}

export function TaskCard({ task, onClick }: TaskCardProps) {
  const statusColors = {
    'todo': 'bg-muted text-muted-foreground',
    'in-progress': 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300',
    'completed': 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300',
    'blocked': 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300'
  };

  const priorityColors = {
    'low': 'bg-accent text-accent-foreground',
    'medium': 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300',
    'high': 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300'
  };

  return (
    <div 
      className="glass-card p-5 cursor-pointer group animate-fade-in animate-once"
      onClick={onClick}
    >
      <div className="flex justify-between items-start mb-3">
        <div>
          <h3 className="font-semibold font-display text-base text-card-foreground group-hover:text-primary transition-colors">
            {task.title}
          </h3>
          <p className="text-sm text-muted-foreground mt-1 line-clamp-2">
            {task.description}
          </p>
        </div>
        <Badge variant="secondary" className={`${statusColors[task.status]}`}>
          {task.status.replace('-', ' ')}
        </Badge>
      </div>
      
      <div className="space-y-4 mt-4">
        <div>
          <div className="flex justify-between items-center mb-1.5 text-sm">
            <span className="text-muted-foreground">Progress</span>
            <span className="font-medium">{task.progress}%</span>
          </div>
          <Progress value={task.progress} className="h-1.5" />
        </div>
        
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <Avatar className="h-8 w-8">
              <AvatarImage src={task.assignee.avatar} alt={task.assignee.name} />
              <AvatarFallback>{task.assignee.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
            </Avatar>
            <Badge variant="outline" className={`${priorityColors[task.priority]}`}>
              {task.priority}
            </Badge>
          </div>
          
          <div className="flex items-center text-muted-foreground text-xs space-x-2">
            <div className="flex items-center">
              <Clock className="h-3.5 w-3.5 mr-1" />
              <span>Today</span>
            </div>
            <div className="flex items-center">
              <Calendar className="h-3.5 w-3.5 mr-1" />
              <span>{task.dueDate}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
