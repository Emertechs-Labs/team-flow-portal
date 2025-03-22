
import { useState } from "react";
import { TaskCard, Task } from "./TaskCard";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { PlusCircle, Clock, Calendar, AlertCircle } from "lucide-react";

// Sample data
const tasks: Task[] = [
  {
    id: "1",
    title: "Update the company handbook",
    description: "Review and update sections about vacation policy and remote work guidelines.",
    status: "in-progress",
    priority: "medium",
    progress: 45,
    dueDate: "Oct 20",
    assignee: {
      name: "Alex Morgan",
    }
  },
  {
    id: "2",
    title: "Prepare quarterly report",
    description: "Compile data from all departments and prepare the Q3 report for the executive team.",
    status: "todo",
    priority: "high",
    progress: 10,
    dueDate: "Oct 25",
    assignee: {
      name: "Taylor Swift",
    }
  },
  {
    id: "3",
    title: "Review new marketing materials",
    description: "Review the new brochure designs and provide feedback to the design team.",
    status: "completed",
    priority: "low",
    progress: 100,
    dueDate: "Oct 15",
    assignee: {
      name: "John Smith",
    }
  },
  {
    id: "4",
    title: "Update client presentation",
    description: "Revise the presentation with the latest project updates and metrics.",
    status: "blocked",
    priority: "high",
    progress: 60,
    dueDate: "Oct 18",
    assignee: {
      name: "Kate Chen",
    }
  },
];

export function TaskList() {
  const [selectedTask, setSelectedTask] = useState<Task | null>(null);
  
  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-display font-semibold">Recent Tasks</h2>
        <Button>
          <PlusCircle className="h-4 w-4 mr-2" />
          New Task
        </Button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {tasks.map((task, index) => (
          <TaskCard 
            key={task.id} 
            task={task} 
            onClick={() => setSelectedTask(task)}
          />
        ))}
      </div>
      
      <Dialog open={!!selectedTask} onOpenChange={(open) => !open && setSelectedTask(null)}>
        {selectedTask && (
          <DialogContent className="sm:max-w-[500px]">
            <DialogHeader>
              <div className="flex items-center justify-between">
                <DialogTitle>{selectedTask.title}</DialogTitle>
                <Badge variant="secondary" className={
                  selectedTask.status === 'todo' ? 'bg-muted text-muted-foreground' :
                  selectedTask.status === 'in-progress' ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300' :
                  selectedTask.status === 'completed' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300' :
                  'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300'
                }>
                  {selectedTask.status.replace('-', ' ')}
                </Badge>
              </div>
              <DialogDescription>
                {selectedTask.description}
              </DialogDescription>
            </DialogHeader>
            
            <div className="space-y-6 mt-2">
              <div>
                <div className="flex justify-between items-center mb-2 text-sm">
                  <span className="text-muted-foreground">Progress</span>
                  <span className="font-medium">{selectedTask.progress}%</span>
                </div>
                <Progress value={selectedTask.progress} className="h-2" />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <span className="text-sm text-muted-foreground">Assignee</span>
                  <div className="flex items-center space-x-2">
                    <Avatar className="h-6 w-6">
                      <AvatarImage src={selectedTask.assignee.avatar} alt={selectedTask.assignee.name} />
                      <AvatarFallback>{selectedTask.assignee.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    <span className="text-sm font-medium">{selectedTask.assignee.name}</span>
                  </div>
                </div>
                
                <div className="space-y-1">
                  <span className="text-sm text-muted-foreground">Priority</span>
                  <Badge variant="outline" className={
                    selectedTask.priority === 'low' ? 'bg-accent text-accent-foreground' :
                    selectedTask.priority === 'medium' ? 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300' :
                    'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300'
                  }>
                    {selectedTask.priority}
                  </Badge>
                </div>
              </div>
              
              <div className="border-t pt-4 flex justify-between">
                <div className="flex items-center text-muted-foreground text-sm">
                  <Clock className="h-4 w-4 mr-1.5" />
                  <span>Created 2 days ago</span>
                </div>
                
                <div className="flex items-center text-muted-foreground text-sm">
                  <Calendar className="h-4 w-4 mr-1.5" />
                  <span>Due {selectedTask.dueDate}</span>
                </div>
              </div>
              
              {selectedTask.status === 'blocked' && (
                <div className="bg-destructive/10 p-3 rounded-md flex items-start">
                  <AlertCircle className="h-5 w-5 text-destructive mr-2 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-medium text-destructive">Blocked</h4>
                    <p className="text-xs text-muted-foreground mt-1">
                      Waiting for client approval on the design changes before proceeding further.
                    </p>
                  </div>
                </div>
              )}
              
              <div className="flex justify-end space-x-3">
                <Button variant="outline">Edit Task</Button>
                <Button>Update Status</Button>
              </div>
            </div>
          </DialogContent>
        )}
      </Dialog>
    </div>
  );
}
