import { Facebook, Twitter, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export function AuthSidebar() {
  return (
    <div className="w-full md:w-1/2 p-8 bg-gradient-to-br from-[#1c1e3d]/80 to-[#2a2d5c]/80">
      <div className="flex items-center space-x-2 mb-8">
        <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg" />
        <span className="text-2xl font-bold text-white">PodCity</span>
      </div>
      
      <h2 className="text-sm font-semibold tracking-wider text-white/80 uppercase mb-8">
        Login to your professional podcity dashboard
      </h2>

      <div className="space-y-4">
        <h3 className="text-lg font-medium text-white mb-6">
          Login using social media to get quick access
        </h3>

        <Button 
          variant="outline" 
          className={cn(
            "w-full bg-[#3B5998] hover:bg-[#3B5998]/90 text-white border-0",
            "flex items-center justify-center space-x-2"
          )}
        >
          <Facebook size={20} />
          <span>Sign in with Facebook</span>
        </Button>

        <Button 
          variant="outline" 
          className={cn(
            "w-full bg-[#1DA1F2] hover:bg-[#1DA1F2]/90 text-white border-0",
            "flex items-center justify-center space-x-2"
          )}
        >
          <Twitter size={20} />
          <span>Sign in with Twitter</span>
        </Button>

        <Button 
          variant="outline" 
          className={cn(
            "w-full bg-[#DB4437] hover:bg-[#DB4437]/90 text-white border-0",
            "flex items-center justify-center space-x-2"
          )}
        >
          <Mail size={20} />
          <span>Sign in with Google</span>
        </Button>
      </div>
    </div>
  );
}